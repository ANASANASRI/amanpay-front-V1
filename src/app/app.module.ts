import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WidgetComponent } from './components/widget/widget.component';
import { HeaderComponent } from './components/header/header.component';
import { ScrolloptionsComponent } from './components/scrolloptions/scrolloptions.component';
import { TokenComponent } from './components/token/token.component';
import './app.component.css';

@NgModule({
  declarations: [
    AppComponent,
    WidgetComponent,
    HeaderComponent,
    ScrolloptionsComponent,
    TokenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
