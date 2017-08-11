import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {EmployeeData} from './employee.module';


@Injectable()
export class EmployeeDataServices {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private employeeUrl = 'https://shielded-harbor-21142.herokuapp.com/employees';

  constructor(private http: Http) { }

  /*
    getEmployeeData() {
        return this.http.get('https://shielded-harbor-21142.herokuapp.com/employees/all')
             .map(response => <EmployeeData[]> response.json());
  }*/

  getEmployeeData(): Promise<EmployeeData[]> {
    return this.http.get(this.employeeUrl + '/all')
      .toPromise()
      .then(response => response.json() as EmployeeData[])
      .catch(this.handleError);
  }

  updateEmployeeData(emp: EmployeeData): Promise<EmployeeData> {
    return this.http
      .put(this.employeeUrl + '/edit', JSON.stringify(emp), { headers: this.headers })
      .toPromise()
      .then(response => response.json() as EmployeeData)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
