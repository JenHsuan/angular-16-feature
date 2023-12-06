import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignalDemoComponent } from '../signal-demo/signal-demo.component';

@Component({
  selector: 'app-signal-fake2',
  standalone: true,
  imports: [CommonModule, SignalDemoComponent],
  template: `
    <div class="container">
      child 2 (signal)
      <app-signal-demo></app-signal-demo>
    </div>`,
  styleUrls: ['./signal-fake2.component.scss'],
})
export class SignalFake2Component {
  ngDoCheck(): void {
    console.warn('child 2 CD (signal)')
  }
}
