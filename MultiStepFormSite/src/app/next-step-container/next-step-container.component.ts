import { Component, OnInit, Input } from '@angular/core';
import { ShareDataService } from '../services/share-data.service';
import { AppComponent } from '../app.component';
import { FormGuideComponent } from '../form-guide/form-guide.component';

@Component({
  selector: 'msfs-next-step-container',
  templateUrl: './next-step-container.component.html',
  styleUrls: ['./next-step-container.component.css'],
})
export class NextStepContainerComponent implements OnInit {
  ngOnInit(): void {
  }

  buttonPrevious: HTMLCollectionOf<Element> = document.getElementsByClassName(
    'previous-step-button'
  );
  buttonNext: HTMLCollectionOf<Element> =
    document.getElementsByClassName('next-step-button');
  buttonSubmit: HTMLCollectionOf<Element> =
    document.getElementsByClassName('submit-button');

  @Input()
  pageIndex! : number;

  @Input()
  stepNumber! : HTMLCollectionOf<Element>;

  shareData : ShareDataService = new ShareDataService;
  formGuide : FormGuideComponent = new FormGuideComponent;

  public turnNextPage(): void {
    // this.shareData.updateProperty(AppComponen);
    console.log(this.formGuide)

    this.shareData.updateFormGuideStep(this.formGuide, 1); // does not work
    // this.shareData.stepNumber.item(this.pageIndex)?.classList.remove("active");
    // this.pageIndex = this.pageIndex + 1;
    // this.shareData.stepNumber.item(this.pageIndex)?.classList.add("active");

    // switch(this.pageIndex) {
    //   case 0:
    //     this.shareData.pageOne.item(0)?.classList.add("appear");
    //     // this.shareData.pageOneElement.item(0)?.classList.add("appear");
    //     break;
    //   case 1:
    //     this.shareData.pageOne.item(0)?.classList.add("disappear");
    //     this.shareData.pageOne.item(0)?.classList.remove("appear");
    //     // this.shareData.pageOneElement.item(0)?.classList.remove("appear");

    //     console.log(this.shareData.pageOne);
    //     this.shareData.pageTwo.item(0)?.classList.add("appear");
    //     this.shareData.previousStepButton.item(0)?.classList.add("appear");
    //     this.shareData.nextStepContainer.item(0)?.classList.add("both-buttons");
    //     // this.shareData.pageTwoElement.item(0)?.classList.add("appear");
    //     break;

    //   case 2:
    //     this.shareData.pageTwo.item(0)?.classList.add("disappear");
    //     this.shareData.pageTwo.item(0)?.classList.remove("appear");
    //     // this.shareData.pageTwoElement.item(0)?.classList.remove("appear");
    //     this.shareData.pageThree.item(0)?.classList.add("appear");
    //     // this.shareData.pageThreeElement.item(0)?.classList.add("appear");
    //     break;

    //   case 3:
    //     this.shareData.pageThree.item(0)?.classList.add("disappear");
    //     this.shareData.pageThree.item(0)?.classList.remove("appear");
    //     // this.shareData.pageThreeElement.item(0)?.classList.remove("appear");
    //     this.shareData.pageFour.item(0)?.classList.add("appear");
    //     // this.shareData.pageFourElement.item(0)?.classList.add("appear");
    //     break;

    //   case 4:
    //     this.shareData.pageFour.item(0)?.classList.add("disappear");
    //     this.shareData.pageFour.item(0)?.classList.remove("appear");
    //     // this.shareData.pageFourElement.item(0)?.classList.remove("appear");
    //     this.shareData.pageFive.item(0)?.classList.add("appear");
    //     this.shareData.nextStepContainer.item(0)?.classList.add("disappear");
    //     // this.shareData.pageFiveElement.item(0)?.classList.add("appear");
    //     break;
    // }
  }
}
