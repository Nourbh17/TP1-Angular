import {Component, OnInit} from '@angular/core';
import { Cv } from '../model/cv';
import { CvService } from '../services/cv.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit{
  juniorCvs: Cv[] = [];
  seniorCvs: Cv[] = [];
  content: Cv[]=[];
  selectedCv: Cv | null = null;
  cvs: Cv[] = [];
  seniorsActive = true;
  juniorsActive = false;
  constructor(
    private cvService: CvService,
    private activatedroute: ActivatedRoute,
    private router:Router
  ){}
  ngOnInit(): void {
    /*this.cvService.getCvs().subscribe(
      (cvs) => {
        this.cvs = cvs;
      },
      (error) => {
        alert('pb accès à l api : donnees fake');
        this.cvs = this.cvService.getFakeCvs();
      }
    );

    this.cvService.cvs$.subscribe((cvs) => {
      this.juniorCvs = cvs.filter((cv) => cv.age && cv.age < 40);
      this.seniorCvs = cvs.filter((cv) => cv.age && cv.age >= 40);
      this.content=this.seniorCvs
    });

    this.cvService.loadCvs();*/
    // @ts-ignore
    this.activatedroute.data.subscribe((data: { cvs: Cv[] }) => {
      console.log('Data from resolver:', this.activatedroute.data);
      this.cvs = data.cvs;
    });
    console.log('hi')
    this.juniorCvs = this.cvs.filter((cv) => cv.age && cv.age < 40);
    this.seniorCvs = this.cvs.filter((cv) => cv.age && cv.age >= 40);
    this.content=this.seniorCvs
  }

  onForwardCv(cv: Cv) {
    this.selectedCv = cv;
   // console.log(cv);
  }

  showJuniors() {
    this.content=this.juniorCvs;
    console.log(this.content);
    this.juniorsActive=true;
    this.seniorsActive=false;
  }
  showSeniors() {
    this.content=this.seniorCvs;
    this.juniorsActive=false;
    this.seniorsActive=true;
  }

  onCvSelected(cv: Cv) {
    this.router.navigate(['/cv', cv.id]);
  }
}
