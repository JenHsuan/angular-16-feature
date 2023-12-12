import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import InputBindingComponent from './input-binding/input-binding.component';

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
  {
    path: 'hydration',
    loadComponent: () => import('../app/hydration/hydration.component'),
    title: 'Angular 16 - hydration'
  },
  {
    path: 'standalone',
    loadComponent: () => import('../app/standalone/standalone.component'),
    title: 'Angular 16 - standalone'
  },
  {
    path: 'esbuild',
    loadComponent: () => import('../app/esbuild/esbuild.component'),
    title: 'Angular 16 - esbuild'
  },
  {
    path: 'cspnonce',
    loadComponent: () => import('../app/csp-nonce/csp-nonce.component'),
    title: 'Angular 16 - csp nonce'
  },
  {
    path: 'input-binding',
    loadComponent: () => import('../app/input-binding/input-binding.component'),
    title: 'Angular 16 - input binding'
  },
  {
    path: 'input-binding/:id',
    loadComponent: () => import('../app/input-binding/input-binding.component'),
    title: 'Angular 16 - input binding'
  },
  {
    path: 'destroy-ref',
    loadComponent: () => import('../app/destroy-ref/destroy-ref.component'),
    title: 'Angular 16 - destroy ref'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
