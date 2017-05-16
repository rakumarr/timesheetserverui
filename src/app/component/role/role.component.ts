import { Component, OnInit } from '@angular/core';
import {RoleDataServices} from './role.services';
import {RoleData} from './role.module';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
  title = 'Add Role';
  roleData: RoleData[];

  constructor(private roleDataServices: RoleDataServices) {
  }

  ngOnInit() {
    this.roleDataServices.getRoleData()
      .subscribe(roleData => this.roleData = roleData);

    /*this.roleDataServices.createRoleDate()
      .subscribe(roleData => this.roleData = roleData);*/
  }
}

