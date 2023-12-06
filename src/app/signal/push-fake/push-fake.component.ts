import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-push-fake',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './push-fake.component.html',
  styleUrls: ['./push-fake.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PushFakeComponent {
  ngDoCheck(): void {
    console.error('child 1 CD (push)')
  }
}