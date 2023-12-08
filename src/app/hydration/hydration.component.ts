import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-hydration',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hydration.component.html',
  styleUrls: ['./hydration.component.scss']
})
export default class HydrationComponent extends BaseComponent {
  step1 = `ng add @nguniversal/express-engine`;
  step2 = `
  bootstrapApplication(AppComponent, {
    providers: [
      provideClientHydration(),
      ...
    ],
  });
  `;
  step3 = `
  const serverConfig: ApplicationConfig = {
    providers: [
      provideClientHydration(),
      ...
    ]
  };`;
  step4 = `npm run dev:ssr`;
}
