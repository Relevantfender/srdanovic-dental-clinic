import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class ServicesComponent implements AfterViewInit {
  @ViewChild('servicesSection') servicesSection!: ElementRef<HTMLElement>;
  @ViewChild('servicesTitle') servicesTitle!: ElementRef<HTMLElement>;
  @ViewChild('leftService') leftService!: ElementRef<HTMLElement>;
  @ViewChild('rightService') rightService!: ElementRef<HTMLElement>;

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

    if (this.servicesSection) {
      observer.observe(this.servicesSection.nativeElement);
    }
  }

  private triggerAnimations(): void {
    // Title text animation - fades in
    const titleElement = this.servicesTitle.nativeElement;
    titleElement.animate(
      [
        { offset: 0, opacity: 0 },
        { offset: 0.5, opacity: 0.5 },
        { offset: 1, opacity: 1 }
      ],
      { duration: 900, fill: 'forwards', easing: 'ease-out' }
    );

    // Left service - slides from left and stays glued
    const leftElement = this.leftService.nativeElement;
    leftElement.animate(
      [
        { offset: 0, transform: 'translateX(-100%)' },
        { offset: 1, transform: 'translateX(0)' }
      ],
      { duration: 1500, fill: 'forwards', easing: 'ease-out', delay: 200 }
    );

    // Right service - slides from right and stays glued
    const rightElement = this.rightService.nativeElement;
    rightElement.animate(
      [
        { offset: 0, transform: 'translateX(100%)' },
        { offset: 1, transform: 'translateX(0)' }
      ],
      { duration: 1500, fill: 'forwards', easing: 'ease-out', delay: 200 }
    );
  }
}
