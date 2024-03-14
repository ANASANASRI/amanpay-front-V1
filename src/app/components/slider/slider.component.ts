import { Option } from './../../model/option/option.module';
import { AfterViewInit, Component, ContentChild, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { SlideConfig } from '../../models/slide-config.model';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent implements OnInit, AfterViewInit {

  
  @Input('items')
  items: Option[] = [
    { id: 1, name: 'Card', url: 'https://img.lovepik.com/free-png/202109/lovepik-credit-card-png-image_400174222_wh1200.png' },
    { id: 2, name: 'Token', url: 'https://picsum.photos/200/300.jpg' },
    { id: 3, name: 'Aman Pay', url: 'https://picsum.photos/200/300.jpg' },
    { id: 4, name: 'Pay direct', url: 'Description of Pay direct' },
    { id: 5, name: 'Option 5', url: 'Description of Option 5' },
    { id: 6, name: 'Option 6', url: 'Description of Option 6' },
    { id: 7, name: 'Option 7', url: 'Description of Option 7' },
  ];
  

  dots: number[] = [];
  activeSlideID = 1;

  @ContentChild('template')
  template: TemplateRef<any> | undefined;

  @Output('select')
  onSelect: EventEmitter<string> = new EventEmitter<string>()

  @ViewChild('slideContainer')
  slideContainer!: ElementRef;

  @Input('slideConfig')
  slideConfig = new SlideConfig();



  sliderContainerWidth = 0;
  slideWidth = 0;
  elementsToShow = 1;
  sliderWidth = 0;

  sliderMarginLeft = 0;

  isSlidesOver = false;

  @HostListener('window:resize', ['$event'])
  onScreenResize() {
    this.setUpSlider()
  }

  constructor() { }

  ngOnInit(): void {

    console.log(this.dots)
  }

  getItems() {
    return this.items as any[]
  }

  ngAfterViewInit(): void {
    this.setUpSlider()
  }

  setUpSlider() {
    if (window.innerWidth < 500)
      this.elementsToShow = this.slideConfig.breakpoints.sm;
    else if (window.innerWidth < 900)
      this.elementsToShow = this.slideConfig.breakpoints.md;
    else if (window.innerWidth < 1300)
      this.elementsToShow = this.slideConfig.breakpoints.lg;
    else
      this.elementsToShow = this.slideConfig.breakpoints.xl;

    if (this.items.length < this.elementsToShow) {
      this.elementsToShow = this.items.length;
    }

    this.dots = Array(this.items.length - this.elementsToShow + 1);

    let container = this.slideContainer.nativeElement as HTMLElement;

    this.sliderContainerWidth = container.clientWidth;
    this.slideWidth = this.sliderContainerWidth / this.elementsToShow;
    this.sliderWidth = this.slideWidth * this.items.length;

    if(this.slideConfig.autoPlay) this.autoPlay()
  }
//////////////////////////////////////////////////////////////////////////////////////////

prev() {
  if (this.activeSlideID === 1) {
    return; 
  }
  this.activeSlideID--;
  this.sliderMarginLeft = this.sliderMarginLeft + this.slideWidth;
}


  next() {
    const notShowingElementsCount = this.items.length - this.elementsToShow;
    const possibleMargin = -(notShowingElementsCount * this.slideWidth);
    if (this.sliderMarginLeft <= possibleMargin) {
      this.isSlidesOver = true;
      return
    }
    this.isSlidesOver = false;
    this.activeSlideID++;
    this.sliderMarginLeft = this.sliderMarginLeft - this.slideWidth;
  }

//////////////////////////////////////////////////////////////////////////////////////////
  move(slideID: number) {
    console.log("Slide ID" + slideID)
    console.log("activeSlideID" + this.activeSlideID)
    let difference = slideID - this.activeSlideID;
    if (difference > 0) {
      // Next
      for (let index = 0; index < difference; index++) {
        this.next()
      }
    } else if (difference < 0) {
      //prev
      for (let index = 0; index < Math.abs(difference); index++) {
        this.prev()
      }
    }
  }

//////////////////////////////////////////////////////////////////////////////////////////
  autoPlay(){
    setTimeout(() => {
      if(this.isSlidesOver === true){
        this.sliderMarginLeft = this.slideWidth;
      }
      this.next()
      this.autoPlay()
    }, 1000);
  }


}

