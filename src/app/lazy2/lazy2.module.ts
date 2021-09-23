import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Lazy2RoutingModule } from './lazy2-routing.module';
import { Lazy2Component } from './lazy2.component';
import { MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { TaskComponent } from './task/task.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatExpansionModule} from '@angular/material/expansion';
import { FirstComponent } from './first/first.component';
import {MatDividerModule} from '@angular/material/divider';
@NgModule({
  declarations: [
    Lazy2Component,
    TaskComponent,
    FirstComponent
  ],
  imports: [
    CommonModule,
    Lazy2RoutingModule,
    MatAutocompleteModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatDividerModule

  ]
})
export class Lazy2Module { }
