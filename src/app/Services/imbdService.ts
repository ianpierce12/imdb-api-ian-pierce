import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ImdbService {

  host = "http://www.theimdbapi.org/api/";

  constructor(private http: Http) {}

  getMovieByTitle(title: string) {
    return this.http.get(this.host + "find/movie?title=" + title);
  }

  getMovieById(id: string) {
    return this.http.get(this.host + "movie?movie_id=" + id);
  }

  getPersonByName(name: string) {
    name.replace(" ", "+");
    return this.http.get(this.host + "find/person?name=" + name);
  }

  getPersonById(id: string) {
    return this.http.get(this.host + "find/person?person_id=" + id);
  }

}
