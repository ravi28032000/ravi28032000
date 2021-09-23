import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApsService {

  constructor(private http:HttpClient) { }
  getall(){
    return this.http.get(" http://localhost:3000/profile");
  }
}
