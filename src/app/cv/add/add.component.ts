import {Component, OnInit} from '@angular/core';
import {CvService} from "../services/cv.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {Cv} from "../model/cv";
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{
  constructor(
    private cvService :CvService,
    private router : Router
  ) {
  }
  ngOnInit(): void {
  }

  add(addForm: NgForm) {
    this.cvService.addCv(addForm.value)
    this.router.navigate(['cv'])
  }


}
