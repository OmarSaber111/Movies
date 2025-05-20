import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss']
})
export class MoviedetailsComponent {
  id:string=''
  moviedetails:any
  imgurl:string='https://image.tmdb.org/t/p/w500/'
  constructor(private _MoviesService:MoviesService,private _ActivatedRoute:ActivatedRoute){
   this.id = _ActivatedRoute.snapshot.params['id'];
   _MoviesService.getmoviedetails(this.id).subscribe((response)=>{
    this.moviedetails= response;

   })
   
   
  }

}
