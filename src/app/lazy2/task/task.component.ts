import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {map,startWith} from "rxjs/operators";
import { FormGroup } from '@angular/forms';
import { ApsService } from '../aps.service';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

 
  constructor(private aps:ApsService){}
  myControl=new FormControl;
  mycontrol=new FormControl;
  // title = 'TASK6';
  //Raj=["Raj"];
  choice:String='';
  details:any=FormGroup;
  details1:any=FormGroup;
  wall:any[]=["alert","allow","anger","annual","any","area","angle","assemble","atom","arrange","access",
  "ball","bay","beat","because","beware","blood","blot","bomp","borrow","brick",
  "cash","cancel","chairman","chess","clay","clean","cock","coal","comply","colour",
  "dam","damage","deem","draw","display","debate","dealer","dispute","dash","deny",
  "earth","ease","emit","energy","estate","evade","evene","evil","export","eight",
  "factor","fee","fill","filter","female","fish","flag","fix","factor","formar",
  "gamble","gap","gauge","ghee","glitter","goal","golden","good","ground","gun",
  "hail","harbour","hay","hero","headmaster","hit","hoist","husband","human","human",
  "index","insert","insight","issue","injure","invalid","invest","inspect","interview","irregular",
  
  "Apple","apple"]
  count=10;
  well:any=[];
  name:any=[];
  // ids= [{"Ravi":1}];
  a:any=[];
  dear:any;
  filters:any= new Observable<String[]>();
  filter:any=new Observable<String[]>();
  addetails(){
    
    console.log(this.a[this.myControl.value])
    // this.aps.getall().subscribe((d:any) =>{
    //   this.wall=d;
    // })
    this.count=this.count + 10;
    console.log(this.count);
    
  }
  another(form:any){
    // console.log(form.value)
  }
  ngOnInit(){
    this.aps.getall().subscribe((d:any) =>{
      this.well=d;
      const de:any=d;
      for(let i=0;i<de.length;i++){
        this.name.push(this.well[i].name)
      }
      // console.log(this.name)
      // console.log(this.wall)
    })

    this.details=new FormGroup({
      "myControl":new FormControl()
    })
    // this.myControl.setValue("Ravi")
    this.details1=new FormGroup({
      "mycontrol":new FormControl()
    })
    
    this.filters=this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
    this.filter=this.mycontrol.valueChanges.pipe(
      startWith(''),
      map(value => this._filters(value))
      
      );
  }
  
  private _filter(value: string): string[] {
    const filterValue = value;

    return this.wall.filter((option:any) => option.includes(filterValue) >(this.wall.indexOf(option)>(this.count-1))
    // this.wall.indexOf(option.include(filterValue)) <this.count
    );
  }
  private _filters(value: string): string[] {
    const filterValue = value;

    return this.name.filter((option:any)=>option.includes(filterValue) > (this.name.indexOf(option)>(this.count-1)))
    // this.wall.indexOf(option.include(filterValue)) <this.count
    ;
  }
  
}
