import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(private snackbar:MatSnackBar) { }
  panelOpenState=false;
  panelOpenStates=true;
  ngOnInit(): void {
  }
  output(first:any,second:any){
    this.snackbar.open(first,second)
  }
  afterall(){
    this.panelOpenState=!this.panelOpenState;
    this.panelOpenStates=!this.panelOpenStates;
  }
}
