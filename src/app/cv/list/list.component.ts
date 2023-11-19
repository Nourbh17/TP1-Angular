import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cv } from '../model/cv';
import {Router} from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() cvs: Cv[] = [];
  @Output()
  forwardCv = new EventEmitter();
  @Input()
  onSelectCv(cv: Cv): void {
    console.log(cv);
    this.forwardCv.emit(cv);
  }
  @Output() itemSelected: EventEmitter<Cv> = new EventEmitter<Cv>();

  onItemClick(cv: Cv): void {
    this.itemSelected.emit(cv);
  }

  constructor(
    private router:Router
  ) {
  }
}
