import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Subscriber } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  error:string = ''
  constructor(private _authsevice : AuthService, private _router: Router){}
  registerform = new FormGroup({
    first_name : new FormControl(null,[Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    last_name : new FormControl(null,[Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    age : new FormControl(null,[Validators.required, Validators.min(16), Validators.max(60)]),
    email : new FormControl(null,[Validators.required, Validators.email]),
    password : new FormControl(null,[Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]),
  })

  supmitregisterform(registerform:FormGroup){
    this._authsevice.Register(registerform.value).subscribe((response)=>{

      if(response.message == 'success')
      {
        this._router.navigate(['/login'])
      }
      else{
        this.error = response.errors.email.message

      }

    })
  }

}
