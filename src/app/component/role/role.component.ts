import { Component, OnInit } from '@angular/core';
import {RoleDataServices} from './role.services';
import {RoleData} from './role.module';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
  title = 'Role Details';
  roleData: RoleData[];
  newRoleData: any = {};

  constructor(private roleDataServices: RoleDataServices) {
  }

  ngOnInit() {
    this.roleDataServices.getRoleData()
      .subscribe(roleData => this.roleData = roleData);
  }
  saveRole() {
    if (this.newRoleData !== {}) {
      this.roleData.push(this.newRoleData);
      this.newRoleData = '';
    }
  }

  editRole() {
    if (this.newRoleData !== {}) {
      this.roleData.push(this.newRoleData);
      this.newRoleData = '';
    }
  }

  removeRole(index) {
    this.roleData.splice(index, 1);
  }
}

