import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {EmployeeData} from './employee.module';


@Injectable()
export class EmployeeDataServices {

  constructor(private http: Http) { }

    getEmployeeData() {
        return this.http.get('https://shielded-harbor-21142.herokuapp.com/employees/all')
             .map(response => <EmployeeData[]> response.json());
  }
}
