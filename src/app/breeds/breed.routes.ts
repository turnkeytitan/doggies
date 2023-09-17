import { Route } from '@angular/router';
import { BreedListComponent } from './breed-list/breed-list.component';
import { BreedComponent } from './breed/breed.component';

export default [
  { path: 'list', component: BreedListComponent },
  { path: ':id', component: BreedComponent },
  { path: '**', redirectTo: 'list' },
  // ...
] as Route[];
