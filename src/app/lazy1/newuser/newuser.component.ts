import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {
  username:String='';
  password:String='';
  moveto(){
    this.router.navigate(["lazy1/first"])
  }
  onsubmit(form:any){
    this.api.newdata(form.value).subscribe(d =>{
      window.alert("Successfully created");

    })
    this.router.navigate(["lazy1/first"]);

  }
  constructor(private api:ApiService,private router:Router) { }

  ngOnInit(): void {
  }

}
