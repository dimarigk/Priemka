import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';


@Injectable({providedIn: 'root'})
export class services_data {
    date:any = "";
    translit = new Subject();
    number_order:string="F2200050114"; //должен быть пустым
    calculator_on:boolean=false;
    calculator_title:any="";
    calculate_result:string="";

    constructor(private http: HttpClient) {}

    public getJSON(): Observable<any> {
            return this.http.get("./assets/data_tovar.json");
}
}


// constructor(private http: HttpClient) {
//     this.getJSON().subscribe((data) => (this.all_tovars = data[this.nomer_zackaza]))
    
    
// }

// public getJSON(): Observable<any> {
//     return this.http.get("./assets/data_tovar.json");
// }
// }