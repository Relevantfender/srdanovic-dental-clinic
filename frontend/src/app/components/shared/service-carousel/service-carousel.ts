import { Component, Input, Output, EventEmitter, signal, HostListener } from '@angular/core';
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
  @Output() serviceSelected = new EventEmitter<ServiceItem>();

  currentIndex = signal(0);
  isAnimating = signal(false);
  viewportWidth = signal(typeof window !== 'undefined' ? window.innerWidth : 1200);

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.viewportWidth.set(window.innerWidth);
  }

  get itemsPerView(): number {
    const itemWidth = 250;
    const availableWidth = this.viewportWidth() - 100; // Subtract padding
    return Math.floor(availableWidth / itemWidth);
  }

  get visibleServices(): ServiceItem[] {
    if (this.services.length === 0) return [];

    const itemsPerView = this.itemsPerView;

    // Only duplicate if we have more items per view than total services
    // This allows for smooth infinite scrolling
    if (this.services.length <= itemsPerView) {
      // Not enough items to fill the view, duplicate once for smooth cycling
      return [...this.services, ...this.services];
    } else {
      // Enough items, just add one extra set for smooth infinite scroll
      return [...this.services, ...this.services];
    }
  }

  get transformStyle(): string {
    const itemWidth = 250; // 250px width per item
    const gap = 0; // No gap between items (updated from 20px)
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

  onServiceClick(service: ServiceItem, event: Event): void {
    event.preventDefault();
    console.log('Service clicked:', service);
    this.serviceSelected.emit(service);
  }
}
