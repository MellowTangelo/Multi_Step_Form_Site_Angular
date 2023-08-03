import { Component, Input } from '@angular/core';

@Component({
  selector: 'msfs-page-five',
  templateUrl: './page-five.component.html',
  styleUrls: ['./page-five.component.css']
})
export class PageFiveComponent {
  @Input() pageFive! : Element | null;

}
