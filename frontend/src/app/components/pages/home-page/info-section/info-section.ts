import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info-section.html',
  styleUrl: './info-section.css'
})
export class InfoSectionComponent implements AfterViewInit {
  @ViewChild('infoSection') infoSection!: ElementRef<HTMLElement>;
  @ViewChild('hoursBlock') hoursBlock!: ElementRef<HTMLElement>;
  @ViewChild('mapBlock') mapBlock!: ElementRef<HTMLElement>;

  workingHours = [
    { day: 'Monday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Tuesday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Wednesday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Thursday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  contactInfo = {
    phone: '(+3816) 64 44 86 435',
    email: 'info@srdanovic-dental.com',
    address: '123 Dental Street, Belgrade, Serbia'
  };

  ngAfterViewInit(): void {
    this.setupScrollAnimation();
  }

  private setupScrollAnimation(): void {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          this.triggerAnimations();
        }
      });
    }, options);

    if (this.infoSection) {
      observer.observe(this.infoSection.nativeElement);
    }
  }

  private triggerAnimations(): void {
    // Hours block - slides from left
    const hoursElement = this.hoursBlock.nativeElement;
    hoursElement.animate(
      [
        { offset: 0, transform: 'translateX(-100%)' },
        { offset: 1, transform: 'translateX(0)' }
      ],
      { duration: 1500, fill: 'forwards', easing: 'ease-out' }
    );

    // Map block - slides from right
    const mapElement = this.mapBlock.nativeElement;
    mapElement.animate(
      [
        { offset: 0, transform: 'translateX(100%)' },
        { offset: 1, transform: 'translateX(0)' }
      ],
      { duration: 1500, fill: 'forwards', easing: 'ease-out' }
    );
  }
}
