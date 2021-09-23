import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { Lazy1Component } from './lazy1.component';
import { AdminGuard } from './admin.guard';
import { SecondComponent } from './second/second.component';
import { NewuserComponent } from './newuser/newuser.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { AdminchildGuard } from './adminchild.guard';
const routes: Routes = [
  
  { path: '', component: Lazy1Component },
  {path:"first",component:FirstComponent},
  {path:'seconds',component:SecondComponent,canActivate:[AdminGuard]
},
  {path:"two",component:TwoComponent,canActivate:[AdminGuard]},

  {path:"three",component:ThreeComponent,canActivate:[AdminGuard]},
   


  {path:"newuser",component:NewuserComponent},
  {path:"one",component:OneComponent,canActivate:[AdminGuard]}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Lazy1RoutingModule { }
