import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionContainerComponent } from '../public/section-container/section-container.component';
import { escapeHtml } from '../public/utils/utils';
import { ROUTE_TYPE, TYPE_TITLE_MAP } from '../public/route/route.domain';
import { HighlightModule } from 'ngx-highlightjs';

@Component({
  selector: 'app-csp-nonce',
  standalone: true,
  imports: [CommonModule, HighlightModule, SectionContainerComponent],
  templateUrl: './csp-nonce.component.html',
  styleUrls: ['./csp-nonce.component.scss']
})
export default class CspNonceComponent {
  title = TYPE_TITLE_MAP.get(ROUTE_TYPE.CSP_NONCE);
  escapeHtml = escapeHtml;

  example1 = `http-equiv="Content-Security-Policy" content="default-src 'self'"`;

  example2 = `
  http-equiv="Content-Security-Policy" content="default-src 'self'; 
  img-src *; media-src example.org example.net; script-src userscripts.example.com"
  `;

  example3 = `http-equiv="Content-Security-Policy" content="style-src 'self'"`;

  step1 = `http-equiv="Content-Security-Policy" content="style-src 'self' 'nonce-randomNonce'"`;

  step2 = `<app-root ngCspNonce="randomNonce"></app-root>`;
}
