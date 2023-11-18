import { Component } from '@angular/core';
import { Cv } from '../model/cv';
import { CvService } from '../services/cv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent {
  juniorCvs: Cv[] = [];
  seniorCvs: Cv[] = [];
  currentTab: string = 'junior';
  selectedCv: Cv | null = null;
  cvs: Cv[] = [];
  constructor(
private cvService: CvService,
private router: Router){}
  ngOnInit(): void {
    /*this.cvService.getCvs().subscribe(
      (cvs) => {
        this.cvs = cvs;
      },
      (error) => {
        alert('pb accès à l api : donnees fake');
        this.cvs = this.cvService.getFakeCvs();
      }
    );*/

    this.cvService.cvs$.subscribe((cvs) => {
      this.juniorCvs = cvs.filter((cv) => cv.age && cv.age < 40);
      this.seniorCvs = cvs.filter((cv) => cv.age && cv.age >= 40);
    });

    this.cvService.loadCvs();
  }
 
  onForwardCv(cv: Cv) {
    this.selectedCv = cv;
   // console.log(cv);
  }

  setTab(tab: string) {
    this.currentTab = tab;
  }

  onCvSelected(cv: Cv) {
    this.router.navigate(['/cv', cv.id]);
  }
}
