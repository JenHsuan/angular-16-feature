import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ROUTE_MAP, ROUTE_TYPE, TYPE_TITLE_MAP } from '../route/route.domain';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  title = 'Notes of Angular v16';
  updateTime = '2023/12/13';
  selectedRoute = ROUTE_TYPE.HOME;
  route: string;

  sideBarList = [
    ROUTE_TYPE.SIGNAL,
    ROUTE_TYPE.HYDRATION,
    ROUTE_TYPE.ESBUILD,
    ROUTE_TYPE.STANDALONE,
    ROUTE_TYPE.CSP_NONCE,
    ROUTE_TYPE.INPUT_BINDING,
    ROUTE_TYPE.DESTROY_REF,
    ROUTE_TYPE.BREAKING_CHANGE,
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

  getRouteStyle(type: ROUTE_TYPE) {
    return this.selectedRoute === type ? 'tab-item current' : 'tab-item';
  }

  changeRoute(type: ROUTE_TYPE) {
    const path  = [...ROUTE_MAP.keys()].find(key => type === ROUTE_MAP.get(key));
    if (path) {
      this.router.navigate([path], );
    } 
  }

  getRouteTitle(type: ROUTE_TYPE) {
    return TYPE_TITLE_MAP.get(type) ? TYPE_TITLE_MAP.get(type) : '';
  }
}
