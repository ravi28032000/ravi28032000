import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { interval, Observable } from 'rxjs';
import { ApiService } from 'src/app/lazy1/api.service';
import { AdminGuard } from '../admin.guard';
import { AdminchildGuard } from '../adminchild.guard';
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  username="";
  password='';
  final:any;
  progress=false;
  restto(){
      this.router.navigate(["lazy1/newuser"]);
  }
  url:any="P:\Angular\TASK8\src\assets\lion.png";
  constructor(private api:ApiService,private user:AdminGuard,private router:Router,private use:AdminchildGuard) { }
  final1:any;
  submit(form:NgForm){
    console.log(form.value)
    this.progress=true;
   
    this.api.postall(form.value).subscribe((d:any) =>{
      console.log(d)
      setInterval(()=>{},60000);
       this.final= this.user.onlogin(d);
        this.final1=this.use.onlogin(d);
       console.log('final=',this.final)
       localStorage.setItem('username',this.username);
      //  const a=localStorage.getItem('username');
      //  console.log(a)
      //  const b=localStorage.clear();
      // console.log(b);
      // const len=localStorage.length;
      // console.log(len)
      // localStorage.key(1);
        this.progress=false;
       if(this.final){
      console.log('successfully Created');
      console.log(d);
        this.router.navigate(['lazy1/seconds']);
        form.value.reset;
       }
       else{
         window.alert('Not valid username and password');
       }
    })
  }

  ngOnInit(): void {
  }

}
