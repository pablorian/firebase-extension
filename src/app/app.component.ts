import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'firebaseExtensionLibrary';
  userLogin;
  userRegistry;

  onLogin(e) {
    this.userLogin = e;
  }

  onRegistry(e) {
    this.userRegistry = e;
  }
}
