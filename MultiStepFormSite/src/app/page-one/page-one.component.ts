import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'msfs-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.css']
})
export class PageOneComponent implements OnInit{
  ngOnInit(): void {
    this.pageOne?.classList.add("appear");
  }
  onSubmit() {
    // Handle submission;
  }

  @Input() pageOne! : Element | null;
}
