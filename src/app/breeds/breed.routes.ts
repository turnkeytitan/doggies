import { Route } from '@angular/router';
import { BreedListComponent } from './breed-list/breed-list.component';
import { BreedComponent } from './breed/breed.component';
import { SubBreedComponent } from './sub-breed/sub-breed.component';

export default [
  { path: 'list', component: BreedListComponent },
  { path: ':breed', component: BreedComponent },
  { path: ':breed/:subbreed', component: SubBreedComponent },
  { path: '**', redirectTo: 'list' },
  // ...
] as Route[];
