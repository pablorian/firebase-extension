import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserManagerService {

  private _user: any;
  onUserChange: BehaviorSubject<any> = new BehaviorSubject<any>(this._user);

  constructor(public angularFireAuth: AngularFireAuth) {
    this.angularFireAuth.onAuthStateChanged((e) => {
      this.user = e;
    });
  }

  set user(user) {
    this._user = user;
    this.onUserChange.next(this._user);
  }

  get user() {
    return this._user;
  }

}
