import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-scrolloptions',
  templateUrl: './scrolloptions.component.html',
  styleUrls: ['./scrolloptions.component.css']
})
export class ScrolloptionsComponent {
  
  @ViewChild('widgetsContent', { read: ElementRef }) public widgetsContent!: ElementRef<any>;

  public scrollRight(): void {
    if (this.widgetsContent) {
      this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft + 150), behavior: 'smooth' });
    }
  }

  public scrollLeft(): void {
    if (this.widgetsContent) {
      this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft - 150), behavior: 'smooth' });
    }
  }
}