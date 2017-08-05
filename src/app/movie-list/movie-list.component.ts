import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ImdbService } from '../Services/imbdService';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies = [];
  currentPage = 0;
  allMovies = [];
  max = false;
  loading = true;
  currentSort = "title";
  error = "";

  constructor(private route: ActivatedRoute, private imdbService: ImdbService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.imdbService.getMovieByTitle(params['title'])
        .subscribe(
          (results) => {
            this.allMovies = results.json();
            this.loadMovieGroup();
            this.loading = false;
          },
          (error) => {
            console.log(error);
            this.error = error;
            this.loading = false;
          }
        )
    });
  }

  navigateToMovie(imdb_id: any) {
    this.router.navigate(['./movie/id', imdb_id]);
  }

  loadMovieGroup() {
    this.movies = [];
    for(let i = 0; i < 5; i++) {
      this.movies.push(this.allMovies[this.currentPage * 5 + i]);
      if(this.allMovies.length == this.currentPage * 5 + i){
        this.max = true;
        break;
      }
      else{
        this.max = false;
      }
    }
  }

  pageUp() {
    this.currentPage++;
    this.loadMovieGroup();
  }

  pageDown() {
    this.currentPage--;
    this.loadMovieGroup();
  }

  sort(attribute: string) {
    if(this.currentSort != attribute) {
      this.currentSort = attribute;
      this.allMovies.sort((m1, m2) => {
        if(m1[attribute] > m2[attribute]) {
          return 1;
        }
        if(m1[attribute] < m2[attribute]) {
          return -1;
        }
        return 0;
      });
      this.currentPage = 0;
      this.loadMovieGroup();
    }

  }

}
