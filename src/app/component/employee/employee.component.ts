import {Component, OnInit} from '@angular/core';
import {EmployeeData} from './employee.module';
import {EmployeeDataServices} from './employee.services';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  title: String = 'Employee Details';
  employeeData: EmployeeData[];
  newEmployeeData: any = {};

  constructor(private employeeDataServices: EmployeeDataServices) {
  }

  /*
   getEmpData() {
   this.employeeDataServices.getEmployeeData()
   .subscribe(employeeData => this.employeeData = employeeData);
   }
   */
  ngOnInit() {
    this.employeeDataServices.getEmployeeData()
      .then(employeeData => this.employeeData = employeeData);
  }
/*
  showEditEmployeeForm(empdata: EmployeeData) {
    this.newEmployeeData = empdata;
  }
*/
  saveEmployee() {
    if (this.newEmployeeData !== {}) {
      this.employeeData.push(this.newEmployeeData);
      this.newEmployeeData = '';
    }
  }

  removeEmployee(index) {
    this.employeeData.splice(index, 1);
  }
}
