import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ROUTE_MAP, ROUTE_TYPE, TYPE_TITLE_MAP } from './public/route/route.domain';

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
    ROUTE_TYPE.DESTROY_REF,
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
