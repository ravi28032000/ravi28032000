import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-four',
  templateUrl: './four.component.html',
  styleUrls: ['./four.component.css']
})
export class FourComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  btnClicked($event:any) {
    console.log($event)
    alert('button clicked')
  }
  template1:any;

}
