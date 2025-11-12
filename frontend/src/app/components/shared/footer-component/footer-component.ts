import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface FooterLink {
  label: string;
  route: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer-component.html',
  styleUrl: './footer-component.css'
})
export class FooterComponent {
  quickLinks: FooterLink[] = [
    { label: 'Home', route: '/' },
    { label: 'About Us', route: '/about' },
    { label: 'Services', route: '/services' },
    { label: 'Contact', route: '/contact' }
  ];

  resources: FooterLink[] = [
    { label: 'Patient Forms', route: '/resources/forms' },
    { label: 'Insurance', route: '/resources/insurance' },
    { label: 'FAQs', route: '/resources/faqs' },
    { label: 'New Patients', route: '/resources/new-patients' }
  ];

  contactInfo = {
    phone: '(+3816) 64 44 86 435',
    email: 'info@srdanovic-dental.com',
    address: '123 Dental Street, Belgrade, Serbia'
  };

  socialLinks = {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com'
  };
}
