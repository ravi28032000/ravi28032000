import { Component, OnInit,AfterViewInit,ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit ,AfterViewInit{
  e:any;
  d:any;
  constructor(private api:ApiService,private router:Router) { }
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource=new MatTableDataSource<das>(dear);
  @ViewChild(MatPaginator) paginator:any= MatPaginator;
   
  ngAfterViewInit(){
    this.dataSource.paginator=this.paginator;
  }
  ngOnInit(): void {
    this.api.getall().subscribe(data =>{
      
      
    })
  }
  oneto(){
    this.router.navigate(["lazy1/one"]);
  }
  twoto(){
    this.router.navigate(["lazy1/two"]);
  }
  threeto(){
    this.router.navigate(["lazy1/three"]);
  }
  

}
export interface das{
  'id':Number;
  'userId':number;
  'title':String;
  'completed':String;

}
const dear:any=[
  {'id':1,'userId':1,'title':'welcome','completed':true},
  {'id':2,'userId':1,'title':'welcome','completed':false},
  {'id':3,'userId':1,'title':'welcome','completed':true},
  {'id':4,'userId':1,'title':'welcome','completed':true},
  {'id':5,'userId':1,'title':'welcome','completed':false},
  {'id':6,'userId':1,'title':'welcome','completed':true},
  {'id':7,'userId':1,'title':'welcome','completed':true},
  {'id':8,'userId':1,'title':'welcome','completed':false},
  {'id':9,'userId':1,'title':'welcome','completed':true},
  {'id':10,'userId':1,'title':'welcome','completed':true},
  {'id':11,'userId':3,'title':'welcome','completed':true},
  {'id':12,'userId':5,'title':'welcome','completed':false},
  {'id':13,'userId':1,'title':'welcome','completed':true},
  {'id':14,'userId':4,'title':'welcome','completed':true},
  {'id':15,'userId':3,'title':'welcome','completed':false},
  {'id':16,'userId':3,'title':'welcome','completed':false},
  {'id':17,'userId':1,'title':'welcome','completed':true},
  {'id':18,'userId':1,'title':'welcome','completed':false}
]