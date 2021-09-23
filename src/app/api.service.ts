import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  getdata(){
    return this.http.get("https://jsonplaceholder.typicode.com/todos");
  }
  postdata(){
    return this.http.get("http://127.0.0.1:8000/app2/second");
  }
  poastalldata(data:any){
    return this.http.post("http://127.0.0.1:8000/app1/first",data);
  }
  headers:any=new Headers().set('Access-Control-Allow-Origin', '*');
  
  
  // thirdtwo(){
  //   return this.http.get("http://localhost:3000/dataa");
  // }
}
