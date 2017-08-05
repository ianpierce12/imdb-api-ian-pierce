import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../models/movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input() movie: Movie;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToMovie(id: any) {
    this.router.navigate(['./movie/id', id]);
  }

}
