import { Component } from '@angular/core';
import { Cv } from '../model/cv';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent {
  selectedCv: Cv | null = null;
  constructor(
private cvService: CvService
  ){}
  cvs: Cv[] = this.cvService.getCvs();
  onForwardCv(cv: Cv) {
    this.selectedCv = cv;
    console.log(cv);
  }
}
