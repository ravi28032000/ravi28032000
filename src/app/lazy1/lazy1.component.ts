import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lazy1',
  templateUrl: './lazy1.component.html',
  styleUrls: ['./lazy1.component.css']
})
export class Lazy1Component implements OnInit {
  images = [  
    // { img: "assets/1.jpg" },  
    // { img: "assets/2.jpg" },  
    // { img: "assets/3.jpg" },  
    // { img: "assets/4.jpg" },  
    // { img: "assets/5.jpg" },  
    // { img: "assets/6.jpg" },  
    // { img: "assets/7.jpg" },  
    { img: "assets/8.jpg" },  
    
  ];  
  
  slideConfig = {  
    "slidesToShow": 1,  
    "slidesToScroll": 1,  
    "dots": true,  
    "infinite": true  
  };  
  redirect(){
    this.router.navigate(["lazy1/first"]);
  }
  newdata(){
    this.router.navigate(["lazy1/newuser"])
  }

  constructor(private router:Router) { }
  
  ngOnInit(): void {
  }

}
