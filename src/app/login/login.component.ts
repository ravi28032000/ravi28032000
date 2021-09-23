import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { threadId } from 'worker_threads';
import { ApiService } from '../api.service';
import { NewoneGuard } from '../newone.guard';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // username=new FormControl();
  // password=new FormControl();
  @Output() countChanges:any=new EventEmitter();
  details:any=FormGroup;
  constructor(private api:ApiService,private guard:NewoneGuard,private router:Router) { }
  output(){
    console.log(this.details.value);
    this.api.poastalldata(this.details.value).subscribe(data =>{
      console.log('login=',data);
      const d=this.guard.onlogin(data);
      if(d){
        this.router.navigate(['first']);
        console.log('child to parent')
        
      }
      else{
        alert('Not a valid Username and password');
      }
    });
    
  }

  ngOnInit(): void {
    this.details=new FormGroup({
      'username':new FormControl(),
      'password':new FormControl(),
    })
  }

}
