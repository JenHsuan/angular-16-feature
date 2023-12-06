import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from '../base/base.component';
import { SignalDemoComponent } from './signal-demo/signal-demo.component';
import { SignalFakeComponent } from './signal-fake/signal-fake.component';
import { SignalFake2Component } from './signal-fake2/signal-fake2.component';
import { SignalParentComponent } from './signal-parent/signal-parent.component';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [CommonModule, SignalParentComponent],
  templateUrl: './signal.component.html',
  styleUrls: ['./signal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class SignalComponent extends BaseComponent {
  declareSignal = ``;

  
}
