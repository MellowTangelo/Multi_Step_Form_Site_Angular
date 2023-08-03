import { Component, OnInit, Input } from '@angular/core';
// import { ShareDataService } from '../services/share-data.service';

@Component({
  selector: 'msfs-form-guide',
  templateUrl: './form-guide.component.html',
  styleUrls: ['./form-guide.component.css'],
})
export class FormGuideComponent implements OnInit {
  ngOnInit(): void {
    // this.shareData.updateFormGuideStep(this, 3);
  }

  @Input() formGuide!: Element | null;

  activeStep: number = 0;

  // shareData : ShareDataService = new ShareDataService;
}
