import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export default class NotesComponent extends BaseComponent {

}
