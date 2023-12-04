import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signal.component.html',
  styleUrls: ['./signal.component.scss']
})
export default class SignalComponent extends BaseComponent {

}
