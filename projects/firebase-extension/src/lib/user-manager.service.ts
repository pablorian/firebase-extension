import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {BehaviorSubject} from 'rxjs';
import {User} from './user';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserManagerService {

  private _user: any;
  private _userData: User;
  onUserDataLoad: BehaviorSubject<any> = new BehaviorSubject<any>(this._user);

  constructor(public angularFireAuth: AngularFireAuth, public db: AngularFirestore) {
    this.angularFireAuth.onAuthStateChanged((e) => {
      if (e) {
        this.loadUserData(e);
      }
    });
  }

  createUserData(user) {
    this._user = user;
    const date = new Date().toISOString();
    this._userData = {
      creationDate: date,
      updateDate: date,
      email: this._user.email,
      nombre: this._user.nombre ? this._user.nombre : '',
      uid: this._user.uid,
      img: this._user.img ? this._user.img : ''
    };
    this.db.collection('users').doc(this._user.uid).set(this._userData);
    this.onUserDataLoad.next(this._userData);
  }

  async loadUserData(user) {
    this._user = user;
    const userData = await this.db.collection('users').doc(String(this._user.uid)).get().toPromise();
    this._userData = userData.data() as User;
    this.onUserDataLoad.next(this._userData);
    return this.user;
  }

  get user(): User {
    if (this._userData) {
      return this._userData;
    }
    return this._user;
  }

}
