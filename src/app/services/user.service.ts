import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterForm } from '../interfaces/register-form';
import { environment } from '../../environments/environment';
import { LoginForm } from '../interfaces/login-form';
import { tap } from 'rxjs/operators';

const BASE_URL = environment.BASE_URL;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  signUp( formData: RegisterForm){
    return this.http.post(`${ BASE_URL }/user`, formData)
               .pipe(
                tap(( resp: any ) => {
                  localStorage.setItem('token', resp.token);
                }));
  }

  signIn(formData: LoginForm){
    return this.http.post(`${ BASE_URL }/login`, formData)
               .pipe(
                 tap(( resp: any ) => {
                   localStorage.setItem('token', resp.token);
                 }));
  }
  signInWithGoogle(token){
    console.log(token);
    return this.http.post(`${ BASE_URL }/login/google`, { token })
               .pipe(
                 tap(( resp: any ) => {
                   localStorage.setItem('token', resp.token);
                 }));
  }
}
