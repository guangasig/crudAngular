import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http::HttpClient ) {  }

  incial(){
    this.http.get<any>('http://localhost:8080/api')
  }
}
