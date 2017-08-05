import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../models/person';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  @Input() person: Person;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToPerson() {
    this.router.navigate(['./person/id', this.person.person_id]);
  }

}
