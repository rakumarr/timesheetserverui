import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './component/employee/employee.component';
import { EmployeeDataServices } from './component/employee/employee.services';
import { RoleComponent } from './component/role/role.component';
import {RoleDataServices} from './component/role/role.services';
import { NavbarComponent } from './component/navbar/navbar.component';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';

const appRoutes: Routes = [
  {
    path: 'Emp',
    component: EmployeeComponent
  },
  {
    path: 'Role',
    component: RoleComponent
  },
  {
    path: '',
    component: LoginComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    RoleComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [EmployeeDataServices, RoleDataServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
