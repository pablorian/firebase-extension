import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {UserManagerService} from '../user-manager.service';

@Component({
  selector: 'lib-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  @Output()
  onLogin: EventEmitter<any> = new EventEmitter<any>()
  @Output()
  onErrorLogin: EventEmitter<any> = new EventEmitter<any>()

  constructor(public auth: AngularFireAuth, private userManager: UserManagerService) { }

  ngOnInit() {
  }

  async login() {
    if (this.email && this.password) {
      try {
        const user = await this.auth.auth.signInWithEmailAndPassword(this.email, this.password);
        this.userManager.user = user;
        this.onLogin.emit(user);
      } catch (e) {
        this.onErrorLogin.emit(e);
      }
    }
  }



}
