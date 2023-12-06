import { AfterContentChecked, AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, NgZone, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signal-demo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <div>child-2 (signal): {{ num() }}</div>
    </div>`,
  styleUrls: ['./signal-demo.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalDemoComponent {
  num = signal(1);
  num2 = 0;
  //@Input('index') index: number;
  
  constructor(
    private changeDetector: ChangeDetectorRef,
    private zone: NgZone
  ){
    //this.zone.runOutsideAngular(() => {
      setInterval(() => {
        this.num.update(n => n += 1);
        //this.num2++;
      }, 1000);
   //});
  }

  ngDoCheck(): void {
    console.warn('child 2-1 CD (signal)')
  }
}
