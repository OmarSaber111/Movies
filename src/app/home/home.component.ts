import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  trendingmovie:any[] =[]
  trendingtv:any[] =[]
  trendingpeople:any[] =[]
  imgurl:string='https://image.tmdb.org/t/p/w500/'
  constructor(private _MoviesService:MoviesService)
  {
    _MoviesService.gettrending('movie').subscribe((data)=>{
      this.trendingmovie = data.results.slice(0, 10);

    });
    _MoviesService.gettrending('tv').subscribe((data)=>{
      this.trendingtv = data.results.slice(0, 10);

    });
    _MoviesService.gettrending('person').subscribe((data)=>{
      this.trendingpeople = data.results.slice(0, 10);

    })
  }

}
