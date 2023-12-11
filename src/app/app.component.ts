import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

enum ROUTE_TYPE {
  HOME = 'HOME', 
  NOTES = 'NOTES',
  SIGNAL = 'SIGNAL',
  HYDRATION = 'HYDRATION',
  STANDALONE = 'STANDALONE',
  ESBUILD = 'ESBUILD',
  CSP_NONCE = 'CSP_NONCE',
  INPUT_BINDING = 'INPUT_BINDING'
};

const ROUTE_MAP = new Map<string, ROUTE_TYPE>([
  ['/home', ROUTE_TYPE.HOME],
  ['/notes', ROUTE_TYPE.NOTES],
  ['/signal', ROUTE_TYPE.SIGNAL],
  ['/hydration', ROUTE_TYPE.HYDRATION],
  ['/standalone', ROUTE_TYPE.STANDALONE],
  ['/esbuild', ROUTE_TYPE.ESBUILD],
  ['/cspnonce', ROUTE_TYPE.CSP_NONCE],
  ['/input-binding', ROUTE_TYPE.INPUT_BINDING]
]);

const TYPE_TITLE_MAP = new Map<ROUTE_TYPE, string>([
  [ROUTE_TYPE.HOME, ''],
  [ROUTE_TYPE.NOTES, 'Notes'],
  [ROUTE_TYPE.SIGNAL, 'Signal APIs'],
  [ROUTE_TYPE.HYDRATION, 'Non-destructive Hydration (Developer Preview)'],
  [ROUTE_TYPE.STANDALONE, 'Enhancements for Standalone API'],
  [ROUTE_TYPE.ESBUILD, 'esbuild Supported on the ng build (Developer Preview)'],
  [ROUTE_TYPE.CSP_NONCE, 'CSP Supports for CSS Inline Styles'],
  [ROUTE_TYPE.INPUT_BINDING, 'Router Syntax Improvement - Input Binding']
]);
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Notes of Angular v16';
  updateTime = '2023/12/11';
  selectedRoute = ROUTE_TYPE.HOME;
  route: string;
  routeType = ROUTE_TYPE;

  sideBarList = [
    ROUTE_TYPE.SIGNAL,
    ROUTE_TYPE.HYDRATION,
    ROUTE_TYPE.STANDALONE,
    ROUTE_TYPE.ESBUILD,
    ROUTE_TYPE.CSP_NONCE,
    ROUTE_TYPE.INPUT_BINDING,
    ROUTE_TYPE.NOTES
  ];

  constructor(
    private location: Location, 
    private router: Router
  ) {
    router.events.subscribe((val) => {
      if(location.path() != ''){
        const slices = location.path().split('/');
        this.route = `/${slices[1]}`;
        this.selectedRoute = ROUTE_MAP.get(this.route) || ROUTE_TYPE.HOME;
      } else {
        this.route = 'Home';
      }
    });
  }

  changeRoute(type: ROUTE_TYPE) {
    const path  = [...ROUTE_MAP.keys()].find(key => type === ROUTE_MAP.get(key));
    if (path) {
      this.router.navigate([path], );
    } 
  }

  getRouteStyle(type: ROUTE_TYPE) {
    return this.selectedRoute === type ? 'tab-item current' : 'tab-item';
  }

  getRouteTitle(type: ROUTE_TYPE) {
    return TYPE_TITLE_MAP.get(type) ? TYPE_TITLE_MAP.get(type) : '';
  }
}
