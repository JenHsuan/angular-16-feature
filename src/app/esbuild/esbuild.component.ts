import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ROUTE_TYPE, TYPE_TITLE_MAP } from '../public/route/route.domain';
import { SectionContainerComponent } from '../public/section-container/section-container.component';
import { escapeHtml } from '../public/utils/utils';

@Component({
  selector: 'app-esbuild',
  standalone: true,
  imports: [CommonModule, SectionContainerComponent],
  templateUrl: './esbuild.component.html',
  styleUrls: ['./esbuild.component.scss']
})
export default class EsbuildComponent {
  title = TYPE_TITLE_MAP.get(ROUTE_TYPE.ESBUILD);
  escapeHtml = escapeHtml;
  
  steps = `
  //1. Update the angular.json file
  "architect": {
    "build": {
    "builder": "@angular-devkit/build-angular:browser-esbuild",
      ...
    }
  }
  
  //2. Start the dev server
  ng serve`;
}
