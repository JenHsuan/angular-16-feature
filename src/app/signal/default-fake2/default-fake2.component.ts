import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultDemoComponent } from '../default-demo/default-demo.component';

@Component({
  selector: 'app-default-fake2',
  standalone: true,
  imports: [CommonModule, DefaultDemoComponent],
  template: `
    <div class="container">
      child 2 (default)
      <app-default-demo></app-default-demo>
    </div>`,
  styleUrls: ['./default-fake2.component.scss']
})
export class DefaultFake2Component {
  ngDoCheck(): void {
    console.log('child 2 CD (default)')
  }
}
