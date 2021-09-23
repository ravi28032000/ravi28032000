import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './chart/chart.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { LoginComponent } from './login/login.component';
import { NewoneGuard } from './newone.guard';
import { ThirdComponent } from './third/third.component';
import { FourComponent } from './four/four.component';
const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"four",component:FourComponent},
  {path:"third",component:ThirdComponent},
  {path:"first",component:FirstComponent,canActivate:[NewoneGuard]},
  {path:"second",component:SecondComponent},
  {path:"spinner",component:SpinnerComponent,canActivate:[NewoneGuard]},
  {path:"chart",component:ChartComponent,canActivate:[NewoneGuard]},
  { path: 'lazy1', loadChildren: () => import('./lazy1/lazy1.module').then(m => m.Lazy1Module) ,canActivate:[NewoneGuard]},
  { path: 'lazy2', loadChildren: () => import('./lazy2/lazy2.module').then(m => m.Lazy2Module),canActivate:[NewoneGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
