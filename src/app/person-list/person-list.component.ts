import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ImdbService } from '../Services/imbdService';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  people = [];
  currentPage = 0;
  allPeople = [];
  max = true;
  loading = true;
  currentSort = "title";

  constructor(private route: ActivatedRoute, private router: Router, private imdbService: ImdbService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.imdbService.getPersonByName(params['name'])
        .subscribe(
          (results) => {
            this.allPeople = results.json();
            console.log(this.allPeople);
            this.loadPeopleGroup();
            this.loading = false;
          },
          (error) => console.log(error)
        )
    });
  }

  navigateToPerson(person_id: any) {
    this.router.navigate(['./person/id', person_id]);
  }

  loadPeopleGroup() {
    this.people = [];
    for(let i = 0; i < 5; i++) {
      this.people.push(this.allPeople[this.currentPage * 5 + i]);
      if(this.allPeople.length-1 == this.currentPage * 5 + i){
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
    this.loadPeopleGroup();
  }

  pageDown() {
    this.currentPage--;
    this.loadPeopleGroup();
  }

  sort(attribute: string) {
    if(this.currentSort != attribute) {
      this.currentSort = attribute;
      this.allPeople.sort((p1, p2) => {
        if(p1[attribute] > p2[attribute]) {
          return 1;
        }
        if(p1[attribute] < p2[attribute]) {
          return -1;
        }
        return 0;
      });
      this.currentPage = 0;
      this.loadPeopleGroup();
    }

  }

}
