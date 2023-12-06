import { AfterContentChecked, AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, NgZone, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signal-demo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <div>child 2-1 (signal)</div>
      <button (click)="onClick()">
        {{ num() }}
      </button>
    </div>`,
  styleUrls: ['./signal-demo.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalDemoComponent {
  num = signal(0);
  //num2 = 0;
  //@Input('index') index: number;

  ngDoCheck(): void {
    console.warn('child 2-1 CD (signal)')
  }

  onClick() {
    this.num.update(n => n += 1);
  }
}
