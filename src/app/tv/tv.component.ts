import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent {
  tvShows: any[] = [];
  imgurl: string = 'https://image.tmdb.org/t/p/w500/';
  currentPage: number = 1;
  itemsPerPage: number = 10;

  constructor(private _MoviesService: MoviesService) {
    _MoviesService.gettrending('tv').subscribe(data => {
      this.tvShows = data.results;
    });
  }

  get pagedTvShows() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.tvShows.slice(start, start + this.itemsPerPage);
  }

  get totalPages() {
    return Math.ceil(this.tvShows.length / this.itemsPerPage);
  }
}

