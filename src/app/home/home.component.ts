import { Component } from '@angular/core';
import {services_data} from '../services-data'



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  
})

export class HomeComponent {
  constructor(public services_data : services_data) {}

}
