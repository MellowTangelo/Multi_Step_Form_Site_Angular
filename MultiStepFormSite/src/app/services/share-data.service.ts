import { Injectable, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { FormGuideComponent } from '../form-guide/form-guide.component';

@Injectable({
  providedIn: 'root',
})
export class ShareDataService implements OnInit {
  ngOnInit(): void {}

  updateProperty(appComponent: AppComponent) {
    console.log(appComponent);
    appComponent.showPageOne = false;
    appComponent.showPageTwo = true;
  }

  updateFormGuideStep(formGuide: FormGuideComponent, index : number) {
    formGuide.activeStep = index;
  }

  stepNumber: NodeListOf<Element> = document.querySelectorAll('.step-number');

  previousStepButton: HTMLCollectionOf<Element> =
    document.getElementsByClassName('previous-step-button');

  nextStepContainer: HTMLCollectionOf<Element> = document.getElementsByTagName(
    'msfs-next-step-container'
  );

  pageOne: HTMLCollectionOf<Element> =
    document.getElementsByTagName('msfs-page-one');
  // pageOneElement: HTMLCollectionOf<Element> =
  //   document.getElementsByClassName('page-1');

  pageTwo: HTMLCollectionOf<Element> =
    document.getElementsByTagName('msfs-page-two');
  // pageTwoElement: HTMLCollectionOf<Element> =
  //   document.getElementsByClassName('page-2');

  pageThree: HTMLCollectionOf<Element> =
    document.getElementsByTagName('msfs-page-three');
  // pageThreeElement: HTMLCollectionOf<Element> =
  //   document.getElementsByClassName('page-3');

  pageFour: HTMLCollectionOf<Element> =
    document.getElementsByTagName('msfs-page-four');
  // pageFourElement: HTMLCollectionOf<Element> =
  //   document.getElementsByClassName('page-4');

  pageFive: HTMLCollectionOf<Element> =
    document.getElementsByTagName('msfs-page-five');
  // pageFiveElement: HTMLCollectionOf<Element> =
  //   document.getElementsByClassName('page-5');
}
