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
  steps = [
    'The server generates the initial HTML (SSR)',
    'The client recieves the initial HTML (in this stage, the user still can\'t interact to the web page)',
    'The client downloads the JavaScript bundles',
    'The JavaScript bundles executes when it\'s downloaded',
    'Hydration: the JavaScript will leveraged the web page (in this stage, the user can interact to the web page'
  ];
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
