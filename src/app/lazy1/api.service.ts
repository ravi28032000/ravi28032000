import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  postall(data:any){
    return this.http.post('http://127.0.0.1:8000/app1/first',data);
  }
  getall(){
    return this.http.get("https://jsonplaceholder.typicode.com/todos");
  }
  newdata(data:any){
    return this.http.post('http://127.0.0.1:8000/app1/second',data);
  }
}
