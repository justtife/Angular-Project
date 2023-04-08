import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-body-tab',
  templateUrl: './body-tab.component.html',
  styleUrls: ['./body-tab.component.css'],
})
export class BodyTabComponent {
  //@ts-ignore
  @Input() text: string;
}
