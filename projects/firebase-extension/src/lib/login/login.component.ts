import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserManagerService} from '../user-manager.service';
import {AngularFireAuth} from '@angular/fire/auth';

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

  constructor(public angularFireAuth: AngularFireAuth, private userManager: UserManagerService) { }

  ngOnInit() {
  }

  async login() {
    if (this.email && this.password) {
      try {
        const login = await this.angularFireAuth.signInWithEmailAndPassword(this.email, this.password);
        const user = await this.userManager.loadUserData(login.user);
        this.onLogin.emit(user);
      } catch (e) {
        this.onErrorLogin.emit(e);
      }
    }
  }
}
