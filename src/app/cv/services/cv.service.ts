import { Injectable } from '@angular/core';
import { Cv } from '../model/cv';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  cvs: Cv[] = [];
  constructor(){
    this.cvs = [
      new Cv(1, "Ben Hajla", "Nour", "el1.jpg","student"),
      new Cv(2, "Ben Hnia", "Intidhar", "el2.jpg","student"),
      new Cv(3, "Abdelkefi", "Farah", "el3.jpg","student"),
      new Cv(3, "ben foulen", "foulen", "","teacher"),
    ];
  }
  getCvs() {
    return this.cvs;
  }
  getCvById(id: number): Cv | undefined {
    const cv = this.cvs.find(cv => cv.id == id);
    return cv; 
  }
  deleteCv(cvId: number): void {
    const index = this.cvs.findIndex(cv => cv.id === cvId);
    if (index !== -1) {
      this.cvs.splice(index, 1);
      // You may also perform an HTTP request to delete the CV on the server
      // Example: this.http.delete(`your-api-url/${cvId}`).subscribe();
    }
}
}