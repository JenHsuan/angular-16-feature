import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-push-demo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <div>child 2-1 (OnPush)</div>
    </div>`,
  styleUrls: ['./push-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PushDemoComponent {
  @Input('index') index: number;

  ngDoCheck(): void {
    console.error('child 2-1 CD (push)')
  }
}
