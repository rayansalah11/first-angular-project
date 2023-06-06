import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  
  formData: any = {};

  submitForm() {
    // You can implement your form submission logic here
    console.log('Form submitted:', this.formData);
}
}