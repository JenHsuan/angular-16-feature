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

}
