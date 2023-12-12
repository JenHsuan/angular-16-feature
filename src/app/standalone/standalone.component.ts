import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StandaloneParentComponent } from './standalone-parent/standalone-parent.component';
import { ROUTE_TYPE, TYPE_TITLE_MAP } from '../public/route/route.domain';
import { SectionContainerComponent } from '../public/section-container/section-container.component';
import { escapeHtml } from '../public/utils/utils';

@Component({
  selector: 'app-standalone',
  standalone: true,
  imports: [CommonModule, SectionContainerComponent, StandaloneParentComponent],
  templateUrl: './standalone.component.html',
  styleUrls: ['./standalone.component.scss']
})
export default class StandaloneComponent {
  title = TYPE_TITLE_MAP.get(ROUTE_TYPE.STANDALONE);
  escapeHtml = escapeHtml;
  
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
