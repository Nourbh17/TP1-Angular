import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  
  login(loginForm: any){

  }


  emailErrorMessage: string = '';

  
  validateEmail(email: string) {
   
    if (email.trim() === '') {
      this.emailErrorMessage = 'Veuillez saisir une adresse email.';
    } else {
      this.emailErrorMessage = ''; 
    }
  }
}
