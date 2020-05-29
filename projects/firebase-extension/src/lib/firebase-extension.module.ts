import { NgModule } from '@angular/core';
import { FsListDirective } from './fsList/fs-list.directive';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { FsDocDirective } from './fsDoc/fs-doc.directive';
import { LoginComponent } from './login/login.component';
import { RegistryComponent } from './registry/registry.component';
import { UserManagerService } from './user-manager.service';
import { FormsModule} from '@angular/forms';
import { UserProfileComponent } from './user-profile/user-profile.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    FsListDirective,
    FsDocDirective,
    LoginComponent,
    RegistryComponent,
    UserProfileComponent
  ],
  imports: [
    AngularFireModule,
    AngularFirestoreModule,
    FormsModule,
    CommonModule
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
    UserProfileComponent
  ]
})
export class FirebaseExtensionModule { }
