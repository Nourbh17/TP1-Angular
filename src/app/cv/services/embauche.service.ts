import { Injectable } from '@angular/core';
import { Cv } from '../model/cv';
import { ToastrService } from 'ngx-toastr';
import { CvService } from './cv.service';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
 private cvs: Cv[] = [];
  constructor(private toastr: ToastrService,
    private cvService :CvService,) {
   }
   Embaucher(cv: Cv): void {
    const index = this.cvs.findIndex(c => c.id === cv.id);
    if (index === -1) {
      this.cvs.push(cv);
    } else {
      this.toastr.error(`${cv.name} est déjà sélectionnée`, 'Avertissement');
    }
  }
   getEmbauchees(): Cv[]{
    return this.cvs;
   }
  
   


  
}
