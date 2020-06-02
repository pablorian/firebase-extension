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

  pathCollection = '';
  doc = '';
  data = {
    valor1: '',
    valor2: '',
    valor3: ''
  };

  onLogin(e) {
    this.userLogin = e;
  }

  onRegistry(e) {
    this.userRegistry = e;
  }

  validationFn(data) {
    return true;
  }

  onSave() {
    alert('se guardo');
  }

}
