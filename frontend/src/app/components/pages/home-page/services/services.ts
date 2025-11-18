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
  @ViewChild('servicesHeader') servicesHeader!: ElementRef<HTMLElement>;
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
    // Header animation - comes from top
    const headerElement = this.servicesHeader.nativeElement;
    headerElement.animate(
      [
        { offset: 0, transform: 'translateY(-100px)', opacity: 0 },
        { offset: 0.5, transform: 'translateY(-50px)', opacity: 0.5 },
        { offset: 1, transform: 'translateY(0)', opacity: 1 }
      ],
      { duration: 900, fill: 'forwards', easing: 'ease-out' }
    );

    // Left service - comes from left to center, then continues left
    const leftElement = this.leftService.nativeElement;
    leftElement.animate(
      [
        { offset: 0, transform: 'translateX(-100%)', opacity: 0 },
        { offset: 0.5, transform: 'translateX(0)', opacity: 1 },
        { offset: 1, transform: 'translateX(-20px)', opacity: 0.8 }
      ],
      { duration: 2000, fill: 'forwards', easing: 'ease-in-out', delay: 200 }
    );

    // Right service - comes from right to center, then continues right
    const rightElement = this.rightService.nativeElement;
    rightElement.animate(
      [
        { offset: 0, transform: 'translateX(100%)', opacity: 0 },
        { offset: 0.5, transform: 'translateX(0)', opacity: 1 },
        { offset: 1, transform: 'translateX(20px)', opacity: 0.8 }
      ],
      { duration: 2000, fill: 'forwards', easing: 'ease-in-out', delay: 200 }
    );
  }
}
