import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    console.log('executed=',true)
  }
  one(){
    this.router.navigate(["lazy1/seconds"]);
  }

}
