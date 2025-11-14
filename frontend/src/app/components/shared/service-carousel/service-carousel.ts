import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface ServiceItem {
  name: string;
  image: string;
  routerLink: string;
}

@Component({
  selector: 'app-service-carousel',
  templateUrl: './service-carousel.html',
  styleUrls: ['./service-carousel.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class ServiceCarouselComponent {
  @Input() services: ServiceItem[] = [];
  @Input() title: string = 'Our Services';

  currentIndex = signal(0);
  isAnimating = signal(false);

  get visibleServices(): ServiceItem[] {
    if (this.services.length === 0) return [];

    // Create an infinite loop by duplicating items
    const extendedServices = [
      ...this.services,
      ...this.services,
      ...this.services
    ];

    return extendedServices;
  }

  get transformStyle(): string {
    const itemWidth = 250; // 250px width per item
    const gap = 20; // 20px gap between items
    const offset = this.currentIndex() * (itemWidth + gap);
    return `translateX(-${offset}px)`;
  }

  slideNext(): void {
    if (this.isAnimating()) return;

    this.isAnimating.set(true);
    this.currentIndex.update(val => val + 1);

    setTimeout(() => {
      this.isAnimating.set(false);

      // Reset to beginning when reaching the end of first set
      if (this.currentIndex() >= this.services.length) {
        this.currentIndex.set(0);
      }
    }, 500);
  }

  slidePrev(): void {
    if (this.isAnimating()) return;

    this.isAnimating.set(true);

    // If at the beginning, jump to the end of first set
    if (this.currentIndex() === 0) {
      this.currentIndex.set(this.services.length);
      setTimeout(() => {
        this.currentIndex.update(val => val - 1);
      }, 50);
    } else {
      this.currentIndex.update(val => val - 1);
    }

    setTimeout(() => {
      this.isAnimating.set(false);
    }, 500);
  }

  goToSlide(index: number): void {
    if (this.isAnimating()) return;
    this.currentIndex.set(index);
  }
}
