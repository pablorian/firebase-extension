import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {UserManagerService} from '../user-manager.service';

@Component({
  selector: 'lib-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css']
})
export class RegistryComponent implements OnInit {

  email: string;
  password: string;
  @Output()
  onRegistry: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  onRegistryError: EventEmitter<any> = new EventEmitter<any>();

  constructor(public auth: AngularFireAuth, private userManager: UserManagerService) { }

  ngOnInit() {
  }

  async registry() {
    if (this.email && this.password) {
      try {
        const user = await this.auth.auth.createUserWithEmailAndPassword(this.email, this.password);
        await this.auth.auth.currentUser.sendEmailVerification();
        this.userManager.user = user;
        this.onRegistry.emit(user);
      } catch (e) {
        this.onRegistryError.emit(e);
      }
    }
  }
}
