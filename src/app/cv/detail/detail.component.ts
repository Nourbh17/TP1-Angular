import {Component, OnInit} from '@angular/core';
import { Cv } from '../model/cv';
import { CvService } from '../services/cv.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EmbaucheService } from '../services/embauche.service';
import { switchMap } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit{
  cv: Cv | undefined;

  constructor(private cvService :CvService,
    private embaucheService: EmbaucheService,
    private activatedroute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router

    ){
    this.activatedroute.params.subscribe(params => {
      this.cv = this.activatedroute.snapshot.data['cv'];
    },error => {
        //console.error('Une erreur s\'est produite :', error);
        this.toastr.error(`Aucun CV trouvé pour l'ID`, 'Attention');
        this.router.navigate(['/NotFound']);
      });
  }



    /*ngOnInit() {
      this.activatedroute.params.pipe(
        switchMap(params => this.cvService.getCvById(params['id']))
      ).subscribe(cv => {
        if (!cv) {
          this.router.navigate(['/NotFound']);
        } else {
          this.cv = cv;
        }
      });
    }
*/

ngOnInit() {
  /*
  this.activatedroute.params.subscribe(params => {
    const id = params['id'];
    this.cvService.getCvById(id).subscribe(
      cv => {
        if (cv) {

          this.cv = cv;
        }
      },
      error => {
        // Gérer les erreurs liées à la récupération du CV
        //console.error('Une erreur s\'est produite :', error);
        this.toastr.error(`Aucun CV trouvé pour l'ID ${id}`, 'Attention');
        this.router.navigate(['/NotFound']);
      }
    );
  });*/
}

    deleteCv() {
      if (this.cv) {
        this.cvService.deleteCv(this.cv.id).subscribe(
          () => {
            this.router.navigate(['/cv']);
          },
          error => {
            console.error('Error deleting CV:', error);
          }
        );
      }
    }
  }
