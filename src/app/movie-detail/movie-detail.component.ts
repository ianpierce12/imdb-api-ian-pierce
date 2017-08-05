import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ImdbService } from '../Services/imbdService';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movie = {};

  constructor(private route: ActivatedRoute, private router: Router, private imdbService: ImdbService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.imdbService.getMovieById(params['id'])
        .subscribe(
          (results) => {
            this.movie = results.json();
          },
          (error) => console.log(error)
        )
    });

  }

}
