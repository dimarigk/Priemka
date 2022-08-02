import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {services_data} from './services-data'

const appRoutes: Routes = [
  {path:"",component: HomeComponent},
  {path:"table",component: TableComponent},
  {path:"calculator",component: CalculatorComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TableComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [services_data],
  bootstrap: [AppComponent]
})
export class AppModule { }
