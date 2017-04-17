import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './component/employee/employee.component';
import { EmployeeDataServices } from './component/employee/employee.services';
import { RoleComponent } from './component/role/role.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    RoleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [EmployeeDataServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
