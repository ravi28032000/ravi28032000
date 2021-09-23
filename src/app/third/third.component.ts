import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit{
  text:any;
  constructor() { }
  data:any;
  ngOnInit(): void {
    
  }
  

}
