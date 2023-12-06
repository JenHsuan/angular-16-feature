import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-default-demo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <div>child 2-1 (default)</div>
      <button (click)="onClick()">
        {{ num }}
      </button>
    </div>`,
  styleUrls: ['./default-demo.component.scss']
})
export class DefaultDemoComponent {
  //num = signal(1);
  num = 0;
  //@Input('index') index: number;

  ngDoCheck(): void {
    console.log('child 2-1 CD (default)')
  }

  onClick() {
    this.num++;
  }
}
