import { Component, Input, SimpleChanges, numberAttribute } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from '../base/base.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input-binding',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-binding.component.html',
  styleUrls: ['./input-binding.component.scss']
})
export default class InputBindingComponent extends BaseComponent {
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
    super();
  }

  nav() {
    this.router.navigate(['/input-binding', 1]);
  }
}
