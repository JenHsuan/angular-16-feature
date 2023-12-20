import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionContainerComponent } from '../public/section-container/section-container.component';
import { ROUTE_TYPE, TYPE_TITLE_MAP } from '../public/route/route.domain';
import { escapeHtml } from '../public/utils/utils';
import { HighlightModule } from 'ngx-highlightjs';

@Component({
  selector: 'app-breaking-changes',
  standalone: true,
  imports: [CommonModule, HighlightModule, SectionContainerComponent],
  templateUrl: './breaking-changes.component.html',
  styleUrls: ['./breaking-changes.component.scss']
})
export default class BreakingChangesComponent {
  title = TYPE_TITLE_MAP.get(ROUTE_TYPE.BREAKING_CHANGE);
  escapeHtml = escapeHtml;
  navigationExample = `router.navigate([], {relativeTo: route, queryParams: newQueryParams})`;
}
