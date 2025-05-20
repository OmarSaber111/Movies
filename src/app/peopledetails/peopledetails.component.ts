import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-peopledetails',
  templateUrl: './peopledetails.component.html',
  styleUrls: ['./peopledetails.component.scss']
})
export class PeopledetailsComponent {
  id:string=''
    peopletedails:any
    imgurl:string='https://image.tmdb.org/t/p/w500/'
  constructor(private _ActivatedRoute:ActivatedRoute, private _MoviesService:MoviesService){
    this.id=_ActivatedRoute.snapshot.params['id']
    console.log(this.id)
      _MoviesService.getpeopledetails(this.id).subscribe((response=>{
      this.peopletedails= response;
    }))
  
  }

}
