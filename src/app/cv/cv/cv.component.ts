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
  cvs: Cv[] = [];
  constructor(
private cvService: CvService
  ){}
  ngOnInit(): void {
    this.cvService.getCvs().subscribe(
      (cvs) => {
        this.cvs = cvs;
      },
      (error) => {
        alert('pb accès à l api : donnees fake');
        this.cvs = this.cvService.getFakeCvs();
      }
    );
  }
 
  onForwardCv(cv: Cv) {
    this.selectedCv = cv;
    console.log(cv);
  }
}
