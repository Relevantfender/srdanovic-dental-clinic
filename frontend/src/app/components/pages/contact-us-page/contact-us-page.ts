import { Component, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
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
export class ContactUsPage implements AfterViewInit, OnDestroy {
  @ViewChild('contactInfo') contactInfo!: ElementRef<HTMLElement>;
  @ViewChild('contactFormSection') contactFormSection!: ElementRef<HTMLElement>;

  private observers: IntersectionObserver[] = [];
  formData: ContactForm = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

  isSubmitting = false;

  ngAfterViewInit() {
    this.setupScrollAnimations();
  }

  ngOnDestroy() {
    this.observers.forEach(observer => observer.disconnect());
  }

  private setupScrollAnimations(): void {
    const options = {
      threshold: 0.2,
      rootMargin: '0px'
    };

    // Contact info animation
    if (this.contactInfo) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.animateContactInfo();
          }
        });
      }, options);
      observer.observe(this.contactInfo.nativeElement);
      this.observers.push(observer);
    }

    // Contact form animation
    if (this.contactFormSection) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.animateContactForm();
          }
        });
      }, options);
      observer.observe(this.contactFormSection.nativeElement);
      this.observers.push(observer);
    }
  }

  private animateContactInfo(): void {
    const element = this.contactInfo.nativeElement;

    // Animate the container
    element.animate([
      { opacity: 0, transform: 'translateX(-50px)' },
      { opacity: 1, transform: 'translateX(0)' }
    ], {
      duration: 700,
      easing: 'ease-out',
      fill: 'forwards'
    });

    // Animate info items with stagger
    const infoItems = element.querySelectorAll('.info-item');
    infoItems.forEach((item, index) => {
      setTimeout(() => {
        (item as HTMLElement).animate([
          { opacity: 0, transform: 'translateX(-30px) scale(0.9)' },
          { opacity: 1, transform: 'translateX(0) scale(1)' }
        ], {
          duration: 500,
          easing: 'ease-out',
          fill: 'forwards'
        });
      }, 200 + (index * 100));
    });
  }

  private animateContactForm(): void {
    const element = this.contactFormSection.nativeElement;

    // Animate the container
    element.animate([
      { opacity: 0, transform: 'translateX(50px)' },
      { opacity: 1, transform: 'translateX(0)' }
    ], {
      duration: 700,
      easing: 'ease-out',
      fill: 'forwards'
    });

    // Animate form groups with stagger
    const formGroups = element.querySelectorAll('.form-group');
    formGroups.forEach((group, index) => {
      setTimeout(() => {
        (group as HTMLElement).animate([
          { opacity: 0, transform: 'translateY(20px)' },
          { opacity: 1, transform: 'translateY(0)' }
        ], {
          duration: 400,
          easing: 'ease-out',
          fill: 'forwards'
        });
      }, 200 + (index * 80));
    });

    // Animate submit button
    const submitBtn = element.querySelector('.submit-btn');
    if (submitBtn) {
      setTimeout(() => {
        (submitBtn as HTMLElement).animate([
          { opacity: 0, transform: 'scale(0.8)' },
          { opacity: 1, transform: 'scale(1)' }
        ], {
          duration: 500,
          easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          fill: 'forwards'
        });
      }, 200 + (formGroups.length * 80));
    }
  }

  onSubmit() {
    this.isSubmitting = true;
    console.log('Contact Form Submitted:', this.formData);

    // Simulate API call delay
    setTimeout(() => {
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

      this.isSubmitting = false;
    }, 1000);
  }
}
