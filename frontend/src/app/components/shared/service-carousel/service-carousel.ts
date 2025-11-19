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
  imports: [CommonModule, RouterModule],
})
export class ServiceCarouselComponent {
  @Input() services: ServiceItem[] = [];
  @Input() title: string = 'Our Services';
  @Output() serviceSelected = new EventEmitter<ServiceItem>();

  currentIndex = signal(0);
  isAnimating = signal(false);
  viewportWidth = signal(typeof window !== 'undefined' ? window.innerWidth : 1200);

  @HostListener('window:resize', ['$event'])
  onResize(window: any) {
    this.viewportWidth.set(window.innerWidth);
  }

  get itemsPerView(): number {
    const itemWidth = 250;
    const availableWidth = this.viewportWidth() - 100; // Subtract padding
    return Math.floor(availableWidth / itemWidth);
  }

  get maxIndex(): number {
    // Maximum scroll position: total items minus items that fit in view
    const max = Math.max(0, this.services.length - this.itemsPerView);
    return max;
  }

  get isAtStart(): boolean {
    return this.currentIndex() <= 0;
  }

  get isAtEnd(): boolean {
    return this.currentIndex() >= this.maxIndex;
  }

  get visibleServices(): ServiceItem[] {
    // Just return the services without duplication
    return this.services;
  }

  get transformStyle(): string {
    const itemWidth = 250; // 250px width per item
    const gap = 0; // No gap between items
    const offset = this.currentIndex() * (itemWidth + gap);
    return `translateX(-${offset}px)`;
  }

  slideNext(): void {
    if (this.isAnimating() || this.isAtEnd) return;

    this.isAnimating.set(true);
    this.currentIndex.update((val) => Math.min(val + 1, this.maxIndex));

    setTimeout(() => {
      this.isAnimating.set(false);
    }, 500);
  }

  slidePrev(): void {
    if (this.isAnimating() || this.isAtStart) return;

    this.isAnimating.set(true);
    this.currentIndex.update((val) => Math.max(val - 1, 0));

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
