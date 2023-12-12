import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { escapeHtml } from '../public/utils/utils';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export default class NotesComponent {
  escapeHtml = escapeHtml;

  selfCloseDemo = `
  //Before 16
  <app-side-bar></app-side-bar>

  //After 16
  <app-side-bar/>
  `;

  requiredInputsDemo = `@Input({ required: true }) title: string = '';`;
}
