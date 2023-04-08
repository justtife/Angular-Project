import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css'],
})
export class TabComponent {
  @Input() image_src: any;
  @Input() image_alt: any;
  @Input() user: any;
  @Input() message: any;
  @Input() time: any;
  @Input() unread: any;
}
