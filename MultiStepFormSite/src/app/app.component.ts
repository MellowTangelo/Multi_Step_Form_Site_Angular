import { OnInit, Component } from '@angular/core';
import { ShareDataService } from './services/share-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.currentPageIndex = 0;
    this.showPageOne = true;
  }

  title = 'MultiStepFormSite';

  currentPageIndex!: number;

  showPageOne: boolean = false;
  showPageTwo: boolean = false;
  showPageThree: boolean = false;
  showPageFour: boolean = false;
  showPageFive: boolean = false;

  sharedData: ShareDataService = new ShareDataService();

  updateProperty() {
    this.sharedData.updateProperty(this);
  }
}
