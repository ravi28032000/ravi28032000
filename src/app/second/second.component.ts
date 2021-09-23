import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { filter, startWith } from 'rxjs/operators';
@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit,AfterViewInit {
  @ViewChild(MatPaginator) paginator:any=MatPaginator
  constructor(private api:ApiService) { }
  data:any;
  dataSource:any=new MatTableDataSource();
  dataSource1:any=new MatTableDataSource();
  
  search:String='';
  // data:any=[{'position':1,'name':'Ravi','weight':10,'symbol':12}];
  displayedColumns: string[] = ['branch_gid', 'branch_entitydetailsgid', 'branch_code', 'branch_name',
  'branch_tanno','branch_glno','branch_stdcode','branch_inchargegid','branch_inchargename','branch_contactgid',
  'control_office_branch'];
  // dataSource=new MatTableDataSource(this.data);
  ngOnInit(): void {
     this.api.postdata().subscribe((d:any) =>{
      this.dataSource=new MatTableDataSource(d);
        // this.dataSource['branch_code'].pipe(startWith(""),
        // filter((data:any) =>data.includes(this.search)))
        
      //  console.log(this.dataSource)
     })
    

  }
  valueafterchange(d:any){
    this.dataSource.filter=d.target.value.toLowerCase();
  }
  ngAfterViewInit() {
    this.api.postdata().subscribe((de:any) =>{
      this.dataSource=new MatTableDataSource<any>(de);
      // this.dataSource['branch_code'].pipe(
      //   startWith(''),
      //   filter((data:any)=> data.includes(this.search))
      // )
      
      this.dataSource.paginator = this.paginator;
    });
  //   // this.dataSource.paginator = this.paginator;
   }

}




