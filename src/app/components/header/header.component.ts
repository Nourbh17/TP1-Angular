import { Component } from '@angular/core';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private authentificationService: AuthentificationService) {}

  isLoggedIn(): boolean {
    // Vérifier l'état de connexion en fonction des informations stockées localement
    return this.authentificationService.isUserLoggedIn(); // Méthode à implémenter dans votre service d'authentification
  }

  logout(): void {
    this.authentificationService.logout(); // Appel à la méthode de déconnexion
  }
}
