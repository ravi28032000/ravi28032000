import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  three(){
    this.router.navigate(["lazy1/seconds"]);
  }

}
