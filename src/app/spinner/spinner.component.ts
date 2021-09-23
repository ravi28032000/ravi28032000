import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { NgxSpinnerService } from 'ngx-spinner';
// import { setTimeout } from 'timers';
import { interval, pipe } from 'rxjs';
@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {
  data:any;
  dear=true;
  constructor(private api:ApiService,private spin:NgxSpinnerService) { }
  getdata(){
    
    this.spin.show();
    interval(6000);
    this.api.getdata().subscribe((datas:any) =>{
      this.hideresponce();
      this.data=datas;
      this.dear=false;
      
    })
    this.spin.hide();
    
  }
  hideresponce(){
    const a:any=document.getElementById('loading');
    a.style.display='none';
  
  }
  
  ngOnInit(): void {
  //   this.spin.show();
  //   interval(6000);
  //   this.api.getdata().subscribe((datas:any) =>{
  //     this.data=datas;
  //     this.dear=false;
      
  //   })
  //   this.spin.hide();
    
  //   const a:any=document.getElementById('loading');
  //   a.style.display='none';
  //
 }

}
