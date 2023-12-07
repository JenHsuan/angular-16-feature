import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PushDemoComponent } from '../push-demo/push-demo.component';

@Component({
  selector: 'app-push-fake2',
  standalone: true,
  imports: [CommonModule, PushDemoComponent],
  template: `
    <div class="container">
      child 2 (OnPush)
      <button (click)="onClick()">
      count: {{ num }}
      </button>
      <app-push-demo [index]="num">
      </app-push-demo>
    </div>`,
  styleUrls: ['./push-fake2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PushFake2Component {
  num = 0;

  ngDoCheck(): void {
    console.error('child 2 CD (push)')
  }

  onClick() {
    this.num++;
  }
}
