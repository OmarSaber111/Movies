import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _hhtp:HttpClient) { }
  gettrending(mediatype:string):Observable<any>
  {
     return this._hhtp.get(`https://api.themoviedb.org/3/trending/${mediatype}/day?api_key=480121324138aefb83d1e96ce410184b`);

  }
   getmoviedetails(id:string):Observable<any>
  {
     return this._hhtp.get(`https://api.themoviedb.org/3/movie/${id}?api_key=480121324138aefb83d1e96ce410184b`);

  }
   gettvdetails(id:string):Observable<any>
  {
     return this._hhtp.get(`https://api.themoviedb.org/3/tv/${id}?api_key=480121324138aefb83d1e96ce410184b`);

  }
   getpeopledetails(id:string):Observable<any>
  {
     return this._hhtp.get(`https://api.themoviedb.org/3/person/${id}?api_key=480121324138aefb83d1e96ce410184b`);

  }
}
