import {Directive, Input, SimpleChanges, OnChanges, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';

@Directive({
  selector: '[libFsList]',
  exportAs: 'fsList'
})
export class FsListDirective implements OnInit, OnChanges{

  @Input()
  path: string;
  @Input()
  order: string;

  data: Observable<any[]>;

  constructor(public db: AngularFirestore) {
  }

  ngOnInit(): void {
    this.init();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.init();
  }

  init() {
    if (!this.order) {
      this.data = this.db.collection(this.path).valueChanges();
    } else {
      this.data = this.db.collection(this.path, ref => ref.orderBy(this.order, 'asc')).valueChanges();
    }
  }

}
