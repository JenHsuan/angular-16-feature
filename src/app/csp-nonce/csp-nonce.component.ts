import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-csp-nonce',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './csp-nonce.component.html',
  styleUrls: ['./csp-nonce.component.scss']
})
export default class CspNonceComponent extends BaseComponent {
  example1 = `
  http-equiv="Content-Security-Policy: default-src 'self'"
  `;

  example2 = `
  http-equiv="Content-Security-Policy" content="default-src 'self'; 
  img-src *; media-src example.org example.net; script-src userscripts.example.com"
  `;

  example3 = `
  http-equiv="Content-Security-Policy" content="style-src 'self'"
  `;

  step1 = `
    http-equiv="Content-Security-Policy" content="style-src 'self' 'nonce-randomNonce'"
  `;

  step2 = `app-root ngCspNonce="randomNonce"`;
}
