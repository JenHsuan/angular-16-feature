import { Component, DestroyRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ROUTE_TYPE, TYPE_TITLE_MAP } from '../public/route/route.domain';
import { SectionContainerComponent } from '../public/section-container/section-container.component';
import { Subscription, interval } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { escapeHtml } from '../public/utils/utils';

@Component({
  selector: 'app-destroy-ref',
  standalone: true,
  imports: [CommonModule, SectionContainerComponent],
  templateUrl: './destroy-ref.component.html',
  styleUrls: ['./destroy-ref.component.scss']
})
export default class DestroyRefComponent {
  title = TYPE_TITLE_MAP.get(ROUTE_TYPE.DESTROY_REF);
  escapeHtml = escapeHtml;

  demo1 = `
  constructor(destroyRef: DestroyRef) {
    destroyRef.onDestroy(() => {
      // Put cleanup logic here
      console.log("destroy");
    })
  }
  `;

  demo2 = `
  private subscriptions = destroyScope();

  ngOnInit() {
    //Add the subscription to scope
    this.subscriptions.add(
      interval(1000).subscribe(value => console.log(value))
    );

    //Or use takeUntilDestroyed
    interval(1000).pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(console.log);
  }

  export function destroyScope() {
    const subscriptions = new Subscription();
    inject(DestroyRef).onDestroy(() => {
      subscriptions.unsubscribe();
    })
    return subscriptions;
  }
  `;

  constructor(private destroyRef: DestroyRef) {
    destroyRef.onDestroy(() => {
      // Put cleanup logic here
      console.log("destroy");
    })
  }

  private subscriptions = destroyScope();
  
  ngOnInit() {
    //Add the subscription to scope
    this.subscriptions.add(
      interval(1000).subscribe(value => console.log(value))
    );

    //Or use takeUntilDestroyed
    // interval(1000).pipe(
    //   takeUntilDestroyed(this.destroyRef)
    // ).subscribe(console.log);
  }
}

export function destroyScope() {
  const subscriptions = new Subscription();
  inject(DestroyRef).onDestroy(() => {
    subscriptions.unsubscribe();
  })
  return subscriptions;
}
