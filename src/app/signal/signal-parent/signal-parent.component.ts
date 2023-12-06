import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignalFake2Component } from '../signal-fake2/signal-fake2.component';
import { SignalFakeComponent } from '../signal-fake/signal-fake.component';

@Component({
  selector: 'app-signal-parent',
  standalone: true,
  imports: [CommonModule, SignalFakeComponent, SignalFake2Component],
  templateUrl: './signal-parent.component.html',
  styleUrls: ['./signal-parent.component.scss']
})
export class SignalParentComponent {
  ngDoCheck(): void {
    console.warn('parent CD (signal)')
  }
}
