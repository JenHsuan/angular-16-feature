import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  {
    path: 'home',
    loadComponent: () => import('../app/home/home.component'),
    title: 'Angular 16'
  },
  {
    path: 'notes',
    loadComponent: () => import('../app/notes/notes.component'),
    title: 'Angular 16 - notes'
  },
  {
    path: 'signal',
    loadComponent: () => import('../app/signal/signal.component'),
    title: 'Angular 16 - signal'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
