import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

    // Variables
    authUrl = 'http://localhost:8000/oauth/token';
    apiUrl = 'http://angular.local/api';
    options: any
    autorization: any;

    /**
     * Constructor
     * @param http The http client object
     */
    constructor(
      private http: HttpClient
    ) {

        this.options = {
          headers: new HttpHeaders({
            Authorization: `Bearer ${this.autorization}`,
            Accept: 'application/json',
            'Content-Type': 'application/json'
          })
        };

     }

    

    /**
     * Resgister a user
     * @param data [name, email, password]
     * @returns 
     */
    register(data:any){
      return this.http.post(this.apiUrl+'login', data);
    }

    /**
     * login user
     * @param data [email, password]
     * @returns user data
     */
    login(data:any){
      return this.http.post(`${this.apiUrl}/login`,data);
    }
    /**
     * get users data
     * @returns 
     */
    getUsers(){
      this.autorization = sessionStorage.getItem('token')
      this.options = {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.autorization}`,
          Accept: 'application/json',
          'Content-Type': 'application/json'
        })
      };
      return this.http.get(`${this.apiUrl}/seguridad/users`,this.options);
    }

    /**
     * udate a user
     * @returns 
     */
    updateuser(code:any, data:any){
      return this.http.put(`${this.authUrl}/${code}`, data);
    }

    /**
     * Verifity is logged in
     */
    isLoggedIn(){
      return sessionStorage.getItem('user')!= null;
    }

    /**
     * Revoke the authenticated user token
     */
    logout() {
      this.options.headers.Authorization = 'Bearer ' + localStorage.getItem('access_token');
      return this.http.get(this.apiUrl + '/token/revoke', this.options);
    }
}
