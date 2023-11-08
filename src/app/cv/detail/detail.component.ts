import { Component } from '@angular/core';
import { Cv } from '../model/cv';
import { CvService } from '../services/cv.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EmbaucheService } from '../services/embauche.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  cv: Cv | undefined;

  constructor(private cvService :CvService,
    private embaucheService: EmbaucheService,
    private activatedroute: ActivatedRoute,
    private router: Router
    
    ){}
    ngOnInit() {
      this.activatedroute.params.subscribe(
        (params)=>{
          this.cv =this.cvService.getCvById(params['id']);
          if (!this.cv) {
            this.router.navigate(['/NotFound']);
        }}
      )
      
    }

    deleteCv() {
      if (this.cv) {
        this.cvService.deleteCv(this.cv.id);
        this.embaucheService.Debaucher(this.cv) 
        this.router.navigate(['cv']);
      }
    }
}
