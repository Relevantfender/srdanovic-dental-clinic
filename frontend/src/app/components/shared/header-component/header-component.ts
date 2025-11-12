import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginForm } from '../login-form/login-form';

interface NavItem {
  label: string;
  route?: string;
  subItems?: NavItem[];
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, LoginForm],
  templateUrl: './header-component.html',
  styleUrl: './header-component.css'
})
export class HeaderComponent {
  showLoginForm = false;
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }
  navItems: NavItem[] = [
    {
      label: 'Services',
      subItems: [
        {
          label: 'General Dentistry',
          subItems: [
            { label: 'Dental Checkups', route: '/services/general/checkups' },
            { label: 'Teeth Cleaning', route: '/services/general/cleaning' },
            { label: 'Fillings', route: '/services/general/fillings' }
          ]
        },
        {
          label: 'Cosmetic Dentistry',
          subItems: [
            { label: 'Teeth Whitening', route: '/services/cosmetic/whitening' },
            { label: 'Veneers', route: '/services/cosmetic/veneers' },
            { label: 'Bonding', route: '/services/cosmetic/bonding' }
          ]
        },
        {
          label: 'Orthodontics',
          subItems: [
            { label: 'Braces', route: '/services/orthodontics/braces' },
            { label: 'Invisalign', route: '/services/orthodontics/invisalign' }
          ]
        },
        { label: 'Emergency Services', route: '/services/emergency' }
      ]
    },
    {
      label: 'About Us',
      subItems: [
        { label: 'Our Team', route: '/about/team' },
        { label: 'Our Practice', route: '/about/practice' },
        {
          label: 'Testimonials',
          subItems: [
            { label: 'Patient Reviews', route: '/about/testimonials/reviews' },
            { label: 'Success Stories', route: '/about/testimonials/stories' }
          ]
        },
        { label: 'Contact', route: '/about/contact' }
      ]
    },
    {
      label: 'Patient Resources',
      subItems: [
        { label: 'New Patients', route: '/resources/new-patients' },
        { label: 'Insurance & Payment', route: '/resources/insurance' },
        { label: 'FAQs', route: '/resources/faqs' },
        {
          label: 'Forms',
          subItems: [
            { label: 'Patient Registration', route: '/resources/forms/registration' },
            { label: 'Medical History', route: '/resources/forms/medical-history' },
            { label: 'Consent Forms', route: '/resources/forms/consent' }
          ]
        }
      ]
    }
  ];

  phoneNumber = '(+3816) 64 44 86 435';

  toggleLoginForm() {
    this.showLoginForm = !this.showLoginForm;
  }

  closeLoginForm() {
    this.showLoginForm = false;
  }
}
