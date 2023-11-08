import { Injectable } from '@angular/core';
import { Cv } from '../model/cv';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
 private cvs: Cv[] = [];
  constructor(private toastr: ToastrService) {
   }

   getEmbauchees(): Cv[]{
    return this.cvs;
   }
   Embaucher(cv: Cv):void{
    const index = this.cvs.indexOf(cv);
    if(index<0){
      this.cvs.push(cv);
    }
    else {
      this.toastr.error(`${cv.name} est déjà sélectionnée`, 'Avertissement')
      //this.toastr.warning(`${cv.name} est déjà sélectionnée`, 'Avertissement');
    }
   }
   Debaucher(cv: Cv):void{
    const index = this.cvs.indexOf(cv);
    if(index>=0){
      this.cvs.splice(index,1);
    }

   
   }
}
