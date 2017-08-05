import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, PreloadAllModules } from '@angular/router';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';

import { ImdbService } from './Services/imbdService';
import { PersonComponent } from './person/person.component';
import { MovieComponent } from './movie/movie.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

import { ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    PersonComponent,
    MovieComponent,
    MovieListComponent,
    PersonListComponent,
    PersonDetailComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules }),
  ],
  providers: [
    ImdbService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
