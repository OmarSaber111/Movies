import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';
MoviesService
@Component({
  selector: 'app-tvdetails',
  templateUrl: './tvdetails.component.html',
  styleUrls: ['./tvdetails.component.scss']
})
export class TvdetailsComponent {
  id:string=''
  tvtedails:any
  imgurl:string='https://image.tmdb.org/t/p/w500/'
constructor(private _ActivatedRoute:ActivatedRoute, private _MoviesService:MoviesService){
  this.id=_ActivatedRoute.snapshot.params['id']
  console.log(this.id)
    _MoviesService.gettvdetails(this.id).subscribe((response=>{
    this.tvtedails= response;
  }))

}
}
