import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact-us-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-us-page.html',
  styleUrl: './contact-us-page.css'
})
export class ContactUsPage {
  formData: ContactForm = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

  onSubmit() {
    console.log('Contact Form Submitted:', this.formData);

    // Show success message to user
    alert('Thank you for contacting us! We will get back to you soon.');

    // Reset form
    this.formData = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    };
  }
}
