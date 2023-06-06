import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  formData: any = {};
  submitForm() {
    // You can implement your login logic here
    console.log('Username: ' + this.formData.username);
    console.log('Password: ' + this.formData.password);
  }
}
