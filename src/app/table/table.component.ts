import { Component } from '@angular/core';
import {services_data} from '../services-data'
import { Item } from 'src/assets/data_tovar';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],

})

export class TableComponent {

  input:any="";
  all_items:Item[]=[];
  highlight_item:boolean=false;
  date=new Date()

  constructor(public services_data : services_data) { //1 экспорт json(папка assets), 2 триггер с калькулятора public result_calculate()
    this.services_data.getJSON().subscribe((data) => (this.all_items = data[this.services_data.number_order]))
    this.services_data.translit.subscribe((data)=>{this.edit_spisok();})  
  }
  
  find_item() { //поиск по ШК
    for (let item of this.all_items) {
      if(item.id==this.input){
        this.services_data.calculator_title=item.name
        return
      }
      else{
        this.services_data.calculator_title="Не верный ШК"
      }
    }
  }

  edit_list() { //выделить товар, отобразить первым
    for (let item of this.all_items) {
      if(item.name == this.services_data.calculator_title){
        item.edit_amount=this.services_data.calculate_result
        this.all_items = this.all_items.filter(item=>item.name!=this.services_data.calculator_title)
        this.all_items.unshift(item)
        this.highlight_item=true
      }
    }
  }

  remove_edit_amount(id){ //снять выделение, очистить принятое количество
    // this.vse_tovars = this.vse_tovars.filter(tovar=>tovar.nazvanie!=id) - вариант удаления из списка
    for (let item of this.all_items) {
      if(item.name==id){
        item.edit_amount=0
        return
      }
    }
  } 
}
  

