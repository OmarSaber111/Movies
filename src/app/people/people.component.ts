import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent {
  people: any[] = [];
  imgurl: string = 'https://image.tmdb.org/t/p/w500/';
  currentPage: number = 1;
  itemsPerPage: number = 10;

  constructor(private _MoviesService: MoviesService) {
    _MoviesService.gettrending('person').subscribe(data => {
      this.people = data.results;
    });
  }

  get pagedPeople() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.people.slice(start, start + this.itemsPerPage);
  }

  get totalPages() {
    return Math.ceil(this.people.length / this.itemsPerPage);
  }
}
