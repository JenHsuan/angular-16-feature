import { Component, Input, SimpleChanges, numberAttribute } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ROUTE_TYPE, TYPE_TITLE_MAP } from '../public/route/route.domain';
import { SectionContainerComponent } from '../public/section-container/section-container.component';
import { escapeHtml } from '../public/utils/utils';
import { HighlightModule } from 'ngx-highlightjs';

@Component({
  selector: 'app-input-binding',
  standalone: true,
  imports: [CommonModule, HighlightModule, SectionContainerComponent],
  templateUrl: './input-binding.component.html',
  styleUrls: ['./input-binding.component.scss']
})
export default class InputBindingComponent {
  title = TYPE_TITLE_MAP.get(ROUTE_TYPE.INPUT_BINDING);
  escapeHtml = escapeHtml;

  @Input({transform: numberAttribute}) id = 0;

  step1 = `ng g c input-binding --standalone`;
  step2 = `\@Input({transform: numberAttribute}) id = 0;`;
  step3 = `
  {
    path: 'input-binding/:id',
    loadComponent: () => import('../app/input-binding.component'),
    title: 'Angular 16 - input binding'
  }
  `;
  step4 = `
  provideRouter(
    ...,
    withComponentInputBinding()
  ),
  `;

  constructor(
    private router: Router
  ) {
  }

  nav() {
    this.router.navigate(['/input-binding', 1]);
  }
}
