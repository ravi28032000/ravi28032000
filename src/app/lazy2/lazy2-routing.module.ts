import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Lazy2Component } from './lazy2.component';
import { TaskComponent } from './task/task.component';
import { FirstComponent } from './first/first.component';
const routes: Routes = [
  { path: '', component: Lazy2Component },
  {path:"task",component:TaskComponent},
  {path:'first',component:FirstComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Lazy2RoutingModule { }
