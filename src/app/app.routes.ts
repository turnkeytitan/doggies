import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'breed',
    loadChildren: () => import('./breeds/breed.routes'),
  },
  { path: '**', redirectTo: 'breed' },
];
