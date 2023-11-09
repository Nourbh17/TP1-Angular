import { Injectable } from '@angular/core';
import { Cv } from '../model/cv';
import { HttpClient } from "@angular/common/http";
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  cvs: Cv[] = [];
  link ='https://apilb.tridevs.net/api/personnes'
  constructor(
    private http : HttpClient,
  ){
    this.cvs = [
      new Cv(1, "Ben Hajla", "Nour", "el1.jpg","student"),
      new Cv(2, "Ben Hnia", "Intidhar", "el2.jpg","student"),
      new Cv(3, "Abdelkefi", "Farah", "el3.jpg","student"),
      new Cv(4, "Bousaid", "aziz", "","student"),
      new Cv(5, "ben foulen", "foulen", "","teacher"),
    ];
  }
  getCvs() : Observable<Cv[]> {
    return this.http.get<Cv[]>(this.link);
  }
  getFakeCvs(){
    return this.cvs;
  }
 

  getCvById(id: number): Observable<Cv | undefined> {
    const url = `${this.link}/${id}`;
    return this.http.get<Cv>(url);
  }
  deleteCv(cvId: number): Observable<void> {
    const deleteUrl = `${this.link}/${cvId}`;
    return this.http.delete<void>(deleteUrl);
  }


  
}