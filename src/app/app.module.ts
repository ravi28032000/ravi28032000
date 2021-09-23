import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { NgxSpinnerModule } from "ngx-spinner";  
import {HttpClientModule} from "@angular/common/http";
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import {MatBadgeModule} from '@angular/material/badge';
import { ChartComponent } from './chart/chart.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import {MatExpansionModule} from '@angular/material/expansion';
import { LoginComponent } from './login/login.component';
import { ThirdComponent } from './third/third.component';
import { FourComponent } from './four/four.component';
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    SpinnerComponent,
    ChartComponent,
    LoginComponent,
    ThirdComponent,
    FourComponent
  ],
  imports: [
    // ChartsModule,
    MatExpansionModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatInputModule,
    
    MatNativeDateModule,
    NgxSpinnerModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatBadgeModule,
    MatPaginatorModule,
    MatTableModule
    
    // NgxMatTimepickerModule,
    // NgxMatNativeDateModule,
    //  NgxMatDatetimePickerModule
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
