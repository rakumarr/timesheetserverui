import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './component/employee/employee.component';
import { EmployeeDataServices } from './component/employee/employee.services';
import { RoleComponent } from './component/role/role.component';
import {RoleDataServices} from './component/role/role.services';
import { NewdataComponent } from './component/newdata/newdata.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    RoleComponent,
    NewdataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [EmployeeDataServices, RoleDataServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
