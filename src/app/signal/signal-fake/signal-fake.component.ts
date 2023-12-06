import { AfterViewChecked, ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signal-fake',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      child 1 (signal)
    </div>`,
  styleUrls: ['./signal-fake.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalFakeComponent {
  ngDoCheck(): void {
    console.warn('child 1 CD (signal)')
  }
}
