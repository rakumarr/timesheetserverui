import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {EmployeeData} from './employee.module';
import {EmployeeDataServices} from './employee.services';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  title = 'Employee Details';
  employeeData: EmployeeData[];

  constructor(private employeeDataServices: EmployeeDataServices) {
  }

  /*ngOnInit() {
    this.employeeDataServices.getEmployeeData()
      .subscribe(employeeData => this.employeeData = employeeData);
  } */

  getEmpData() {
    this.employeeDataServices.getEmployeeData()
      .subscribe(employeeData => this.employeeData = employeeData);
  }

  ngOnInit() {

  }
}
