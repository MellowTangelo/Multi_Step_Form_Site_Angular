import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormGuideComponent } from './form-guide/form-guide.component';
import { PageOneComponent } from './page-one/page-one.component';
import { NextStepContainerComponent } from './next-step-container/next-step-container.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { PageThreeComponent } from './page-three/page-three.component';
import { PageFourComponent } from './page-four/page-four.component';
import { PageFiveComponent } from './page-five/page-five.component';

@NgModule({
  declarations: [
    AppComponent,
    FormGuideComponent,
    PageOneComponent,
    NextStepContainerComponent,
    PageTwoComponent,
    PageThreeComponent,
    PageFourComponent,
    PageFiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
