import { Component } from '@angular/core';
import {services_data} from '../services-data'



@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']

})

export class CalculatorComponent {
  constructor(public services_data : services_data) {}
  input_calculator:string="";

  pressNum(num: string) {
    if (this.input_calculator == '' && num == "0") {
      num = '';
    }
    this.input_calculator = this.input_calculator + num
  }

  Clear() {
    this.input_calculator = '';
  }

  public result_calculate(){
    this.services_data.calculate_result=this.input_calculator
    if(this.input_calculator==""){
      this.services_data.calculate_result="0"
    }
    this.services_data.translit.next(true);
    this.input_calculator=""
  }
}

