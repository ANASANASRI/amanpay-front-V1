import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WidgetComponent } from './components/widget/widget.component';
import { HeaderComponent } from './components/header/header.component';
import { TokenComponent } from './components/token/token.component';
import './app.component.css';
import { SliderComponent } from './components/slider/slider.component';
import { CreditcardComponent } from './components/creditcard/creditcard.component';
import { HomeComponent } from './components/home/home.component';
import { LogoscrollerComponent } from './components/logoscroller/logoscroller.component';
import { ErrorComponent } from './components/error/error.component';
import { StepsComponent } from './components/token/steps/steps.component';
import { GuideComponent } from './components/token/guide/guide.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [
    AppComponent,
    WidgetComponent,
    HeaderComponent,
    TokenComponent,
    SliderComponent,
    CreditcardComponent,
    HomeComponent,
    LogoscrollerComponent,
    ErrorComponent,
    StepsComponent,
    GuideComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    ],
  providers: [
    provideAnimationsAsync('noop')
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
