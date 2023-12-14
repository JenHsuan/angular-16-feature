import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ROUTE_TYPE, TYPE_TITLE_MAP } from '../public/route/route.domain';
import { escapeHtml } from '../public/utils/utils';
import { SectionContainerComponent } from '../public/section-container/section-container.component';

@Component({
  selector: 'app-deprecations',
  standalone: true,
  imports: [CommonModule, SectionContainerComponent],
  templateUrl: './deprecations.component.html',
  styleUrls: ['./deprecations.component.scss']
})
export default class DeprecationsComponent {
  title = TYPE_TITLE_MAP.get(ROUTE_TYPE.DEPRECATIONS);
  escapeHtml = escapeHtml;

  before = `
  const routes: Routes = [
    {
      path: 'default',
      canActivate: [MnAuthGuard],
      component: HomeDashboardComponent,
      pathMatch: 'full',
    },
  ];
  `;

  after = `
  function mapToActivate(providers: Array<Type<{canActivate: CanActivateFn}>>): CanActivateFn[] {
    return providers.map(provider => (...params) => inject(provider).canActivate(...params));
  }
  const routes: Routes = [
    {
      path: 'default',
      canActivate: mapToActivate([MnAuthGuard]),
      component: HomeDashboardComponent,
      pathMatch: 'full',
    },
  ];
  `;

  newWay = `
  export const checkLogin = (url: string, authService = inject(MnAuthService)) => {
    if (this.authService.isLoggedIn) {
      return true;
    }

    if ( this.authService.getRefreshToken() ) {
      return this.authService.refreshAccessToken().pipe(
        take(1),
        map(accessToken => {
          MnLoggerService.logger.info('Guard found authenticated access after refresh access token');

          return true;
        }),
        catchError(refreshError => {
          MnLoggerService.logger.info('Guard found unauthenticated access with invalid refresh token');
          this.authService.gotoLoginPage(this.router, url);
          return of(false);
        }));
    } else {
      MnLoggerService.logger.debug('Guard found unauthenticated access');

      this.authService.gotoLoginPage(this.router, url);
      return false;
    }
  }
  
  export const canActivate = (authService = inject(MnAuthService)) => {
    const url: string = state.url;
    return checkLogin(url);
  }
  
  const routes: Routes = [
    {
      path: 'default',
      canActivate: [() => canActivate()],
      component: HomeDashboardComponent,
      pathMatch: 'full',
    },
  ];
  `;
}
