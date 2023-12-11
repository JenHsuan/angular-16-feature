import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from '../base/base.component';
import { StandaloneParentComponent } from './standalone-parent/standalone-parent.component';

@Component({
  selector: 'app-standalone',
  standalone: true,
  imports: [CommonModule, StandaloneParentComponent],
  templateUrl: './standalone.component.html',
  styleUrls: ['./standalone.component.scss']
})
export default class StandaloneComponent extends BaseComponent {
  migration = `ng generate @angular/core:standalone`;
  standaloneApp = `ng new --standalone`;
  ngZone = `
  bootstrapApplication(App, {
    providers: [provideZoneChangeDetection({ eventCoalescing: true })]
  });
  `;

  coalescing = `
  @Component({
    selector: 'app-standalone-parent',
    standalone: true,
    imports: [CommonModule],
    template: \`
    <div (click)="parent()">
      <button (click)="child()">I will trigger CD twice</button>
    </div>
    \`,
    styleUrls: ['./standalone-parent.component.scss']
  })
  export class StandaloneParentComponent {
    parent() {
      console.log('parent button clicking event');
    }
  
    child() {
      console.log('child button clicking event');
    }
  
    ngDoCheck(): void {
      console.warn('Change detection happened!')
    }
  }
  `;
}
