import { Component, OnInit } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  FromDateTime:String='';
  ToDateTime:any;
  firstdate:any;
  firsttime:any=Number;
  seconddate:any;
  secondtime:any=Number;
  final:any=0;
  em:Array<any>=[];
  em1:Array<any>=[];
  minute:Number=0;
  minute1:Number=0;
  fullhour:any=0;
  datearray:Array<any>=[];
  month:any={'Jan':1,"Feb":2,"Mar":3,"Apr":4,"May":5,"Jun":6,"Jul":7,"Aug":8,"Sep":9,"Oct":10,"Nov":11,"Dec":12};
  year:any=0;
  m:any=0;
  days:any=0;
  h:any=0;
  firsthlaf:any=0;
  secondhalf:any=0;
  finalhr:any=0;
  finaldy:any=0;
  onsubmit(val:NgForm){
    this.datearray.push(this.firstdate.toString().split(" ")[1]);//split the month
    this.datearray.push(this.firstdate.toString().split(" ")[2]);//split the day
    this.datearray.push(this.firstdate.toString().split(" ")[3]);//split the year
    this.datearray.push(this.seconddate.toString().split(" ")[1]);//split the month
    this.datearray.push(this.seconddate.toString().split(" ")[2]);//split the day
    this.datearray.push(this.seconddate.toString().split(" ")[3]);//split the year
    //year calcullate 
    if(this.datearray[2] ==this.datearray[5] || this.datearray[2] >this.datearray[5] ||this.datearray[2] <this.datearray[5]){
      this.year=Math.abs(this.datearray[2] - this.datearray[5] ); //2021-2021=0
    }
    //month calculation
    const month1=this.datearray[0].toString();//month convert String
    const month2=this.datearray[3].toString();
    if(this.month[month1]== this.month[month2]  ){      //same month return 0
      this.m=Math.abs(this.month[month1] - this.month[month2] ) //8-8=0
    }
    else if(this.month[month1] < this.month[month2]){     //diff month means sub and no.of days greater than 30
      this.m=Math.abs(this.month[month1]-this.month[month2])//8-9=1 and check the no of days equal or grearter thn the 30
    }
    //day calculation
    console.log('month=',this.month[month1]==this.month[month2])
    if(this.month[month1]==this.month[month2]){   //same nonth directly subtract the date
      this.days=Math.abs(Math.abs(this.datearray[1])-Math.abs(this.datearray[4]));//19-22=3
    }
    else{       //different month means first month sub 30 and add the second month date
      this.days=Math.abs(this.datearray[1]-30)+Math.abs(this.datearray[4]) ;//19-30+15=26
    }
    console.log(this.month['Jan'])
    console.log(this.datearray);
    // Full of hour callculation
    this.em.push(this.firsttime)
    this.em.push(this.secondtime)
    for(let i=0;i<this.em.length;i++){
      this.em1.push(parseInt( this.em[i].split(":")))//return time and push into array
      this.em1.push(parseInt(this.em[i].split(":")[1]));//return minute and push into array
    }
    // console.log(em1)
    this.firsthlaf=24-this.em1[0];
    const firstmin=60-this.em1[1];
    console.log('hour=',this.firsthlaf,'minute=',firstmin);
    this.minute=(60-this.em1[1])+ this.em1[3];//add two minute to check greater than the 59
    //first calculate minute
    if(this.minute>=60){  //add two time minute is greater than 60 ,is consider the 1hr
      this.fullhour= 1;
      this.minute=Math.abs(60-this.em1[1]+this.em1[3])-60; //remaining minute calculate 35+35=70-60=10
      console.log(this.minute);
    }
    else{
      this.minute=Math.abs(60-this.em1[1]+this.em1[3]);  //20+25=45 minute
      console.log(this.minute)
    }
    
    if(this.em1[0] < this.em1[2] ){
      this.h=24*this.days ;
      this.final=this.h+ this.em1[2]-this.em1[0]; //2*24+ (17-16)
      console.log(Math.floor(this.final/24))
      this.finaldy=Math.floor(this.final/24)
      this.finalhr=this.final % 24
    }
    else{
      this.h=24*this.days;
      this.final= this.h - (this.em1[0]-this.em1[2]) ; //24 -(17-16)
      this.finalhr=this.final % 24;
      this.finaldy=Math.floor(this.final/24)
    }

    
    // console.log(this.em)
    // this.final=this.firsttime-this.secondtime;
  }
  oneof(){
    localStorage.removeItem('username');
    this.router.navigate(['']);
  }
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
