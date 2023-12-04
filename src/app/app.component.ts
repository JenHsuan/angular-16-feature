import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

enum ROUTE_TYPE {
  HOME = 'HOME', 
  NOTES = 'NOTES',
  SIGNAL = 'SIGNAL'
};

const ROUTE_MAP = new Map<string, ROUTE_TYPE>([
  ['/home', ROUTE_TYPE.HOME],
  ['/notes', ROUTE_TYPE.NOTES],
  ['/signal', ROUTE_TYPE.SIGNAL]
]);

const TYPE_TITLE_MAP = new Map<ROUTE_TYPE, string>([
  [ROUTE_TYPE.HOME, ''],
  [ROUTE_TYPE.NOTES, 'Notes'],
  [ROUTE_TYPE.SIGNAL, 'Signal']
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
  updateTime = '2023/12/01';
  selectedRoute = ROUTE_TYPE.HOME;
  route: string;
  routeType = ROUTE_TYPE;

  constructor(
    private location: Location, 
    private router: Router
  ) {
    router.events.subscribe((val) => {
      if(location.path() != ''){
        this.route = location.path();
        this.selectedRoute = ROUTE_MAP.get(this.route) || ROUTE_TYPE.HOME;
      } else {
        this.route = 'Home';
      }
    });
  }

  changeRoute(type: ROUTE_TYPE) {
    const path  = [...ROUTE_MAP.keys()].find(key => type === ROUTE_MAP.get(key));
    if (path) {
      this.router.navigate([path]);
    } 
  }

  getRouteStyle(type: ROUTE_TYPE) {
    return this.selectedRoute === type ? 'tab-item current' : 'tab-item';
  }

  getRouteTitle(type: ROUTE_TYPE) {
    return TYPE_TITLE_MAP.get(type) ? TYPE_TITLE_MAP.get(type) : '';
  }
}
