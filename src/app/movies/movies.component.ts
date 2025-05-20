import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {
  movies: any[] = [];
  imgurl: string = 'https://image.tmdb.org/t/p/w500/';
  currentPage: number = 1;
  itemsPerPage: number = 10;

  constructor(private _MoviesService: MoviesService) {
    _MoviesService.gettrending('movie').subscribe((data => {
      this.movies = data.results;
    }));
  }

  get pagedMovies() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.movies.slice(start, start + this.itemsPerPage);
  }

  get totalPages() {
    return Math.ceil(this.movies.length / this.itemsPerPage);
  }
}
