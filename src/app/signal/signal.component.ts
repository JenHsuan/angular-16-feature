import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignalParentComponent } from './signal-parent/signal-parent.component';
import { PushParentComponent } from './push-parent/push-parent.component';
import { DefaultParentComponent } from './default-parent/default-parent.component';
import { ROUTE_TYPE, TYPE_TITLE_MAP } from '../public/route/route.domain';
import { SectionContainerComponent } from '../public/section-container/section-container.component';
import { escapeHtml } from '../public/utils/utils';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [CommonModule, SectionContainerComponent, SignalParentComponent, PushParentComponent, DefaultParentComponent],
  templateUrl: './signal.component.html',
  styleUrls: ['./signal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class SignalComponent {
  title = TYPE_TITLE_MAP.get(ROUTE_TYPE.SIGNAL);
  escapeHtml = escapeHtml;
  
  code = `
  @Component({
    selector: 'app-signal-demo',
    standalone: true,
    imports: [CommonModule],
    template: '
      <div class="container">
        <div>child 2-1 (signal)</div>
        <button (click)="onUpdateClick()">
          count: {{ num() }}
        </button>
        <button (click)="onResetClick()">
          reset
        </button>
        <div class="formatted-num">
          {{ formattedNum()}}
        </div>
        <div class="formatted-num">
          observable: {{ num$ | async }}
        </div>
      </div>',
    styleUrls: ['./signal-demo.component.scss'],
  })
  export class SignalDemoComponent {
    //declare a writable signal
    num = signal(0);
  
    //declare a read-only signal
    formattedNum = computed(() => 'computed:' + this.num());
  
    //update the signal value based on the current value
    onUpdateClick() {
      this.num.update(n => n += 1);
    }
  
    //directly set signal to the new value
    onResetClick() {
      this.num.set(0);
    }
  
    //to Observable
    num$ = toObservable(this.num);
  
    //to signal
    num2 = toSignal(this.num$);
  
    //trace the signal value
    //whenever any of these signal values change, the effect runs again
    constructor(private injector: Injector) {
      //use effect API in the constructor
      effect(() => {
        console.info('signal value:' + this.num()');
      });

      //or use effect API outside the constructor with the injector
      this.initializeLogging();
    }

    initializeLogging(): void {
      effect(() => {
        console.log('signal value:' + this.num()');
      }, {injector: this.injector});
    }
  
    //Check if the CD happened
    ngDoCheck(): void {
      console.warn('child 2-1 CD (signal)')
    }
  }`;

  
}
