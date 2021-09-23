import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Lazy1RoutingModule } from './lazy1-routing.module';
import { Lazy1Component } from './lazy1.component';
import { FirstComponent } from './first/first.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { HttpClientModule } from '@angular/common/http';
import { SecondComponent } from './second/second.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from "@angular/material/table";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NewuserComponent } from './newuser/newuser.component';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
@NgModule({
  declarations: [
    Lazy1Component,
    FirstComponent,
    SecondComponent,
    NewuserComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent
  ],
  imports: [
    CommonModule,
    Lazy1RoutingModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatMenuModule,
    SlickCarouselModule
  ]
})
export class Lazy1Module { }
