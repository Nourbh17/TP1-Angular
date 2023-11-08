import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cv } from '../model/cv';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() cvs: Cv[] = [];
  @Output()
  forwardCv = new EventEmitter();
  onSelectCv(cv: Cv): void {
    console.log(cv);

    this.forwardCv.emit(cv);
  }
}