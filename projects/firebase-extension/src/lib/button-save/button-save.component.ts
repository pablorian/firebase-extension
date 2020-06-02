import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'lib-button-save',
  templateUrl: './button-save.component.html',
  styleUrls: ['./button-save.component.css']
})
export class ButtonSaveComponent implements OnInit {

  @Input()
  pathCollection: string;
  @Input()
  doc: string;
  @Input()
  data: any;
  @Input()
  validationFn: Function;
  @Output()
  onSave: EventEmitter<any> = new EventEmitter<any>();

  constructor(public db: AngularFirestore) { }

  ngOnInit(): void {
  }

  save() {
    if (this.validationFn && !this.validationFn(this.data)) {
      return;
    }
    if (this.doc) {
      this.db.collection(this.pathCollection).doc(this.doc).set(this.data);
    } else {
      this.db.collection(this.pathCollection).add(this.data);
    }
  }

  isString (value) {
    return typeof value === 'string' || value instanceof String;
  }

}
