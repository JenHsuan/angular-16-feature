import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultFakeComponent } from '../default-fake/default-fake.component';
import { DefaultFake2Component } from '../default-fake2/default-fake2.component';

@Component({
  selector: 'app-default-parent',
  standalone: true,
  imports: [CommonModule, DefaultFakeComponent, DefaultFake2Component],
  templateUrl: './default-parent.component.html',
  styleUrls: ['./default-parent.component.scss']
})
export class DefaultParentComponent {
  ngDoCheck(): void {
    console.log('parent CD (default)')
  }
}
