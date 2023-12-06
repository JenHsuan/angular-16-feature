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
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalFake2Component {
  num2 = 0;

  constructor(
    private changeDetector: ChangeDetectorRef,
  ) {
    //setInterval(() => {
      //this.num.update(n => n += 1);
      this.num2++;
      //this.changeDetector.detectChanges();
    //}, 1000);
  }

  ngDoCheck(): void {
    console.warn('child 2 CD (signal)')
  }
}
