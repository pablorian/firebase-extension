import {Directive, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';

@Directive({
  selector: '[libFsDoc]',
  exportAs: 'fsDoc'
})
export class FsDocDirective implements OnInit{

  @Input()
  path: string;
  data: Observable<any>;

  constructor(private db: AngularFirestore) { }

  ngOnInit(): void {
    this.init();
  }

  init() {
    this.data = this.db.doc(this.path).valueChanges();
  }
}
