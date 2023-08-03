import { Component, Input } from '@angular/core';

@Component({
  selector: 'msfs-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.css']
})
export class PageTwoComponent {
  @Input() pageTwo! : Element | null;

}
