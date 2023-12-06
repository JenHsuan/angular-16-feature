import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PushFakeComponent } from '../push-fake/push-fake.component';
import { PushFake2Component } from '../push-fake2/push-fake2.component';

@Component({
  selector: 'app-push-parent',
  standalone: true,
  imports: [CommonModule, PushFakeComponent, PushFake2Component],
  templateUrl: './push-parent.component.html',
  styleUrls: ['./push-parent.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PushParentComponent {
  ngDoCheck(): void {
    console.error('parent CD (push)')
  }
}
