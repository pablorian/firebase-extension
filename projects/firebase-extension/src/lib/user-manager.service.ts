import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserManagerService {

  private _user: any;

  constructor() { }

  set user(user) {
    this._user = user;
  }

  get user() {
    return this._user;
  }

}
