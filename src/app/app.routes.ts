import { Routes } from '@angular/router';
import { SearchComponent } from './search';
import { MovieListComponent } from './movie-list';
import { PersonListComponent } from './person-list';
import { MovieDetailComponent } from './movie-detail';
import { PersonDetailComponent } from './person-detail';

export const ROUTES: Routes = [
  { path: '', component: SearchComponent },
  { path: 'movie/title/:title', component: MovieListComponent },
  { path: 'movie/id/:id', component: MovieDetailComponent },
  { path: 'person/name/:name', component: PersonListComponent },
  { path: 'person/id/:id', component: PersonDetailComponent }
]
