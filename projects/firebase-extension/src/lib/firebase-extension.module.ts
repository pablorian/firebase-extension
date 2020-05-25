import { NgModule } from '@angular/core';
import { FsListDirective } from './fsList/fs-list.directive';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { FsDocDirective } from './fsDoc/fs-doc.directive';
import { LoginComponent } from './login/login.component';
import { RegistryComponent } from './registry/registry.component';
import {FormsModule} from '@angular/forms';
import {UserManagerService} from './user-manager.service';

@NgModule({
  declarations: [
    FsListDirective,
    FsDocDirective,
    LoginComponent,
    RegistryComponent
  ],
  imports: [
    AngularFireModule,
    AngularFirestoreModule,
    FormsModule,
  ],
  providers: [
    AngularFirestore,
    UserManagerService
  ],
  exports: [
    FsListDirective,
    FsDocDirective,
    LoginComponent,
    RegistryComponent,
    UserManagerService
  ]
})
export class FirebaseExtensionModule { }
