import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {UserManagerService} from '../user-manager.service';

@Component({
  selector: 'lib-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userData: any = { displayName: '', email: '', img: ''};

  constructor(private userManager: UserManagerService) { }

  ngOnInit(): void {
    this.onUserLoad();
  }

  onUserLoad() {
    this.userManager.onUserChange.subscribe((user) => {
      if (user) {
        this.userData = user;
        if (this.userData && !this.userData.img) {
          this.userData.img = 'https://source.unsplash.com/QAB-WJcbgJk/60x60';
        }
      }
    })
  }
}
