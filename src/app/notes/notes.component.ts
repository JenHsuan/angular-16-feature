import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { escapeHtml } from '../public/utils/utils';
import { SectionContainerComponent } from '../public/section-container/section-container.component';
import { ROUTE_TYPE, TYPE_TITLE_MAP } from '../public/route/route.domain';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [CommonModule, SectionContainerComponent],
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export default class NotesComponent {
  title = TYPE_TITLE_MAP.get(ROUTE_TYPE.NOTES);
  escapeHtml = escapeHtml;

  selfCloseDemo = `
  //Before 16
  <app-side-bar></app-side-bar>

  //After 16
  <app-side-bar/>
  `;

  requiredInputsDemo = `
  @Input({ required: true }) title: string = '';
  `;
}
