import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Observable, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser= new BehaviorSubject(null) 

  constructor(private _HttpClient: HttpClient, private _Router:Router) { }
  saveCurrentUser(){
    let token:any = localStorage.getItem('userToken')
    this.currentUser.next(jwtDecode(token)) 
    console.log(this.currentUser)
  }
  Register(formdata: any): Observable<any> {
  return this._HttpClient.post(
    'https://api.themoviedb.org/3/trending/signup/day?api_key=480121324138aefb83d1e96ce410184b',
    formdata
  );
}
Login(userData: any): Observable<any> {
  return this._HttpClient.post('https://api.themoviedb.org/3/trending/signin/day?api_key=480121324138aefb83d1e96ce410184b', userData);
}
logout()
{
  this.currentUser.next(null)
  localStorage.removeItem('userToken')
  this._Router.navigate(['/login'])
}

}
