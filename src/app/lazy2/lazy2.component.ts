import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import jspdf from "jspdf";
import  html2canvas from 'html2canvas';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-lazy2',
  templateUrl: './lazy2.component.html',
  styleUrls: ['./lazy2.component.css']
})
export class Lazy2Component implements OnInit {
  bs=new FormControl;
  cc=new FormControl;
  branchname=new FormControl;
  location=new FormControl;
  apcategory=new FormControl;
  apsub=new FormControl;
  details:any=FormGroup;
  first:any=new Observable<String[]>();
  second:any=new Observable<String[]>();
  third:any=new Observable<String[]>();
  four:any=new Observable<String[]>();
  five:any=new Observable<String[]>();
  six:any=new Observable<String[]>();
  val=false;
  constructor(private router:Router){}
  data:any=[{'bs':'AWE','cc':'QWE','branchname':'KVB001','location':'chennai','apcategory':'AWE','apsub':'123'},
  {'bs':'ASE','cc':'QEE','branchname':'KVB00','location':'chennai1','apcategory':'AWE1','apsub':'1232'},
  {'bs':'AFG','cc':'DEE','branchname':'KVB002','location':'chennai-2','apcategory':'AWE2','apsub':'132'},
  {'bs':'sdf','cc':'QWQ','branchname':'KVB003','location':'chennai-3','apcategory':'AWE3','apsub':'543'},
  {'bs':'QWE','cc':'AXE','branchname':'KVB004','location':'chennai-4','apcategory':'AWE4','apsub':'657'},];
  generate(){
    const data:any=document.getElementById("convert");
    html2canvas(data).then(canvas => {
      let pdf = new jspdf('p', 'mm', 'a4');
      pdf.save('new-file.pdf');
    });
  }
  firstone(){
    this.router.navigate(['lazy2/task']);
  }
  secondone(){
    this.router.navigate(['lazy2/first'])
  }
  onBlurEvent(i:any){
    this.data['bs']=i;
    console.log("bs=",i)
  }
  
  onBlurEvent2(i:any){
    this.data['cc']=i;
    console.log("cc=",i);
  }
  onBlurEvent3(i:any){
    this.data['branchname']=i;
    console.log("branchanme=",i);
  }
  onBlurEvent4(i:any){
    this.data['location']=i;
    console.log("location=",i);
  }
  onBlurEvent5(i:any){
    // this.apcategory=i;
    this.data['apcategory']=i;
    console.log("apcategory=",i)
  }
  ngblur:any;
  
  onBlurEvent6(event: any){

    this.data['apsub']=event;
    console.log("event=",event)
 
 }
  final(){
    // console.log(this.details.reset())
    // this.data.push(this.details.value);
    console.log(this.data)
  }
  show(){
    this.val=!this.val;
  }
  
  first1:any=["BC","EC","RCE","WSE","ASD3","AWE3","AQW3","AFG4","ADFR4","BHJ6","BKLE4","BRT2","BSDE3","BLKO3",
  "CDFR1","CDWWE2","CERDF4","CEWQA3","CFGE3","DERW3","DQASW3","DESC3","DHJR3","DNME1","EQWA1","EWDF2","EHJT3","ERTW3","ESEWS",
  "FRTV3","FBN3","FVBW3","FQWES4","FOPR4","GHJ3","GBNBB4","GBNB2","GWJ1","GHBHN6","HNBNN1","HBNN3","HVVB4","HXQE3","HBNN2","IQWE1","IWWB3","INMN3","INNN4","INNM3",
  "JNMN3","JMNM3","JBVB3","JNMQ3","JKLM5","KERF4","KQASW2","KMNM2","KVBC2","KWER5","LMNB2","LJHG3","LMXWD2"
];
  second1:any=["Ase","ADE","AFE","AWE","ADE","BQW","BZW","BGT","BFG","BJK","CDFR1","CGFDG1","CDFEFRE6","CDFRE3","CDFR8",
  "DFGR4","DERW3","DEWQ3","DJKL","DNMV7","EWS1","EDC3","EGHB4","ESWQ2","EVC5","FBNG1","FGNEM3","FNM4","FLM3","FGHT5"
];
  third1:any=["ABC1","ANV1","AQW2","ASD2","AWD3","BHJ2","BKL4","BOP3","BRT3","BGH4","CHJ1","CFGH4","CWEQ2","CBN4","CGJJ3",
"DFG1","DEW2","DEWQ3","DFG4","DHJJ4","DJKK4","EGHHW1","EVBN2","EVBN1","ECAW1","EDFR2","FRT4","FGHT4","FBNT3","FNMC3","FJNKEW"
];

  four1:any=["Arakonam","Ariyalur","Atcharapakkam","Bolur","Bol","bOTHERI","balur","c1"];
  five1:any=["AWSE3","AJHUH4","ASWED5","AXEDC3","AJJL6","BSDERF4","Bwer4","BFNJFD4","BVBCW3","BQWE4","CFVJJ5","CFHH4","CJKK4","CJLLW4","CJKK3","CKLMW3",
  "DER1","DNNW2","DMNJ3","DJKK5","DNMQ6","EJKL1","EHJW2","EBNW3","ENKW4","ENKN5","EWSD1","FHGJ1","FHBN2","FBNM3","FKLM4","FNB4","FNM6"
];
  six1:any=["A","B","C","D","E","F","G","H","I","J","K","L","M","n","O","P","Q","R","S","T","U","V","W","X","Y","Z",
  "A1","B1","C1","D1","E1","F1","G1","H1","I1","J1","K1","L1","M1","n1","O1","P1","Q1","R1","S1","T1","U1","V1","W1","X1","Y1","Z1",
  "A2","B2","C2","D2","E2","F2","G2","H2","I2","J2","K2","L2","M2","n2","O2","P2","Q2","R2","S2","T2","U2","V2","W2","X2","Y2","Z2",
  "A3","B3","C3","D3","E3","F3","G3","H3","I3","J3","K3","L3","M3","n3","O3","P3","Q3","R3","S3","T3","U3","V3","W3","X3","Y3","Z3",
  "A4","B4","C4","D4","E4","F4","G4","H4","I4","J4","K4","L4","M4","n4","O4","P4","Q4","R4","S4","T4","U4","V4","W4","X4","Y4","Z4"
];
  count1=5;
  count2=5;
  count3=5;
  count4=5;
  count5=5;
  count6=5;
  one(){
    this.count1=this.count1+5;
  }
  two(){
    this.count2=this.count2+5;
  }
  three(){
    this.count3=this.count3+5;
  }
  fou(){
    this.count4=this.count4+5;
  }
  fi(){
    this.count5=this.count5+5;
  }
  si(){
    this.count6=this.count6+5;
  }

  ngOnInit(): void {
    this.details=new FormGroup({
      "bs":new FormControl(''),
      "cc":new FormControl(''),
      "branchname":new FormControl(''),
      "location":new FormControl(''),
      "apcategory":new FormControl(""),
      "apsub":new FormControl('')
    })
    this.first=this.bs.valueChanges.pipe(
      startWith(''),
      map(value => this._first(value))
       
    
    );
    this.second=this.cc.valueChanges.pipe(
      startWith(''),
      map(value => this._second(value))
      );
    this.third=this.branchname.valueChanges.pipe(
        startWith(''),
        map(value => this._third(value))
        );
    this.four=this.location.valueChanges.pipe(
          startWith(''),
          map(value => this._four(value))
          );
    this.five=this.apcategory.valueChanges.pipe(
            startWith(''),
            map(value => this._five(value))
            );
    this.six=this.apsub.valueChanges.pipe(
              startWith(''),
              map(value => this._six(value))
              );

  }
  private _first(value:any):String[]{
    return this.first1.filter((option:any) => option.includes(value)>(this.first1.indexOf(option)>this.count1-1));
  }
  private _second(value:any):String[]{
    return this.second1.filter((option:any) => option.includes(value)>(this.second1.indexOf(option)>this.count2-1));
  }
  private _third(value:any):String[]{
    return this.third1.filter((option:any) => option.includes(value)>(this.third1.indexOf(option)>this.count3-1));
  }
  private _four(value:any):String[]{
    return this.four1.filter((option:any) => option.includes(value)>(this.four1.indexOf(option)>this.count4-1));
  }
  private _five(value:any):String[]{
    return this.five1.filter((option:any) => option.includes(value)>(this.five1.indexOf(option)>this.count5-1));
  }
  private _six(value:any):String[]{
    return this.six1.filter((option:any) => option.includes(value)>(this.six1.indexOf(option)>this.count6-1));
  }

}
