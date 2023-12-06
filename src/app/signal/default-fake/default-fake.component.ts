import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-default-fake',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      child 1 (default)
    </div>`,
  styleUrls: ['./default-fake.component.scss']
})
export class DefaultFakeComponent {
  ngDoCheck(): void {
    console.log('child 1 CD (default)')
  }
}
