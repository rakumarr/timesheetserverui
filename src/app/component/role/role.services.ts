import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {RoleData} from './role.module';


@Injectable()
export class RoleDataServices {

  constructor(private http: Http) { }

  getRoleData() {
    return this.http.get('https://shielded-harbor-21142.herokuapp.com/roles/all')
      .map(response => <RoleData[]> response.json());
  };

  createRoleDate() {

    const roleDescription = 'AutoTest';
    const roleName = 'AutoTest';

    const body = 'roleDescription=' + roleDescription + '&roleName=' + roleName;
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    this.http.post('https://shielded-harbor-21142.herokuapp.com/roles/create', body, {
      headers: headers})
      .map(response => <RoleData[]> response.json());
  };
}
