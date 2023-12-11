import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-standalone-parent',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div (click)="parent()">
    <button (click)="child()">I will trigger CD twice</button>
  </div>
  `,
  styleUrls: ['./standalone-parent.component.scss']
})
export class StandaloneParentComponent {
  parent() {
    console.log('parent button clicking event');
  }

  child() {
    console.log('child button clicking event');
  }

  ngDoCheck(): void {
    console.warn('Change detection happened!')
  }
}
