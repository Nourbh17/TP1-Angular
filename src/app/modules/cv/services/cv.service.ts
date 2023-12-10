import { Injectable } from '@angular/core';
import { Cv } from '../model/cv';
import { HttpClient } from "@angular/common/http";
import {BehaviorSubject, Observable, catchError, map, tap, throwError, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private cvsSubject = new BehaviorSubject<Cv[]>([]);
  cvs$ = this.cvsSubject.asObservable();
  cvs: Cv[] = [];
  link ='https://apilb.tridevs.net/api/personnes'
  constructor(
    private http : HttpClient,
  ){
    this.cvs = [
      new Cv(1, "Ben Hajla", "Nour", 21,21,"el1.jpg","student"),
      new Cv(2, "Ben Hnia", "Intidhar", 21,21,"el2.jpg","student"),
      new Cv(3, "Abdelkefi", "Farah",21, 21,"el3.jpg","student"),
      new Cv(4, "Bousaid", "aziz",41, 21,"","student"),
      new Cv(5, "ben mbarek", "ranim",44,21, "","teacher"),
    ];
  }

  loadCvs(): void {
    this.http.get<Cv[]>(this.link)
      .pipe(
        tap((cvs) => this.cvsSubject.next(cvs)),
        catchError((error) => {
          console.error('Error loading CVs from the API:', error);
          this.cvsSubject.next(this.getFakeCvs()); // Fallback to fake data
          return throwError('Unable to load CVs from the API. Using fake data.');
        })
      )
      .subscribe();
  }
  updateCv(cv: Cv){
    return this.http.patch(this.link, cv);
  }
  getCvs() : Observable<Cv[]> {
    return this.http.get<Cv[]>(this.link).pipe(
      map((cvs) => {
        this.cvs = cvs;
        return cvs;
      }),
      catchError((e) => {
        //  this.toaster.error('Erreur de récupération de données');
        console.log('Erreur de récupération de données'+e)
        return of(this.cvs);
      })
    );
  }

  getFakeCvs(){
    return this.cvs;
  }
  addCv(cv: Cv): Observable<any> {
    return this.http.post(this.link, cv);
  }

  searchCvs(name: string): Observable<Cv[]> {
    const searchParams = { where: { name: { like: `%${name}%` } } };
    const url = `${this.link}?filter=${encodeURIComponent(JSON.stringify(searchParams))}`;
    return this.http.get<Cv[]>(url);
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
