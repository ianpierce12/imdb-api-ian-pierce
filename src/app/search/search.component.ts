import { Component, OnInit } from '@angular/core';
import { ImdbService } from '../Services/imbdService';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private imdbService: ImdbService, private router: Router) { }

  ngOnInit() {
  }

  movieTitleSearch(form: NgForm) {
    let title = form.value.search_terms;
    title.replace(" ", "+");
    this.router.navigate(['./movie/title', title]);
    this.imdbService.getMovieByTitle(title)
      .subscribe(
        (results) => {},
        (error) => console.log(error)
      );
  }

  movieIdSearch(form: NgForm) {
    let id = form.value.search_terms;
    this.router.navigate(['./movie/id', id]);
    this.imdbService.getMovieById(id)
      .subscribe(
        (results) => {},
        (error) => console.log(error)
      );
  }

  personNameSearch(form: NgForm) {
    let name = form.value.search_terms;
    name.replace(" ", "&");
    this.router.navigate(['./person/name', name]);
    this.imdbService.getPersonByName(name)
      .subscribe(
        (results) => {},
        (error) => console.log(error)
      );
  }

  personIdSearch(form: NgForm) {
    let id = form.value.search_terms
    this.router.navigate(['./person/id', id]);
    this.imdbService.getPersonById(id)
      .subscribe(
        (results) => {},
        (error) => console.log(error)
      );
  }

}
