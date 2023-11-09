import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
link='https://apilb.tridevs.net/api/Users/login'
  constructor(
    private http: HttpClient
  ) { }

  login(credentials: any){
    return this.http.post(this.link, credentials)
  }


  isUserLoggedIn(): boolean {
    const user = localStorage.getItem('user');
    console.log('User data:', user); // Vérifier si les données sont récupérées du stockage local
    return user !== null; // Retourne vrai si des informations d'authentification sont présentes, sinon faux
  }
  logout(): Observable<any> {
    
    // Vider les informations stockées localement
    localStorage.removeItem('user');
    return new Observable(observer => {
      observer.next(true); 
      observer.complete();
    });
  }
}
