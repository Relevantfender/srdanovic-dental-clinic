import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content-blocks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-blocks.html',
  styleUrl: './content-blocks.css'
})
export class ContentBlocksComponent implements AfterViewInit {
  private router = inject(Router);

  @ViewChildren('contentSection') contentSections!: QueryList<ElementRef<HTMLElement>>;

  // Placeholder gallery images
  galleryImages = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 }
  ];

  // Create an infinite loop by tripling the array
  infiniteGalleryImages = [...this.galleryImages, ...this.galleryImages, ...this.galleryImages];
  currentImageIndex = this.galleryImages.length; // Start at the middle copy
  isTransitioning = true;

  ngAfterViewInit(): void {
    this.setupScrollAnimations();
  }

  private setupScrollAnimations(): void {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          const section = entry.target as HTMLElement;
          this.triggerSectionAnimation(section);
        } else if (!entry.isIntersecting) {
          const section = entry.target as HTMLElement;
          this.reverseSectionAnimation(section);
        }
      });
    }, options);

    this.contentSections.forEach(section => {
      observer.observe(section.nativeElement);
    });
  }

  private triggerSectionAnimation(section: HTMLElement): void {
    const halves = section.querySelectorAll('.section-half');

    halves.forEach((half, index) => {
      const element = half as HTMLElement;

      if (index === 0) {
        // Left half - slides from left
        element.animate(
          [
            { offset: 0, transform: 'translateX(-100%)' },
            { offset: 1, transform: 'translateX(0)' }
          ],
          { duration: 1500, fill: 'forwards', easing: 'ease-out' }
        );
      } else {
        // Right half - slides from right
        element.animate(
          [
            { offset: 0, transform: 'translateX(100%)' },
            { offset: 1, transform: 'translateX(0)' }
          ],
          { duration: 1500, fill: 'forwards', easing: 'ease-out' }
        );
      }
    });
  }

  private reverseSectionAnimation(section: HTMLElement): void {
    const halves = section.querySelectorAll('.section-half');

    halves.forEach((half, index) => {
      const element = half as HTMLElement;

      if (index === 0) {
        // Left half - slides back to left
        element.animate(
          [
            { offset: 0, transform: 'translateX(0)' },
            { offset: 1, transform: 'translateX(-100%)' }
          ],
          { duration: 1500, fill: 'forwards', easing: 'ease-in' }
        );
      } else {
        // Right half - slides back to right
        element.animate(
          [
            { offset: 0, transform: 'translateX(0)' },
            { offset: 1, transform: 'translateX(100%)' }
          ],
          { duration: 1500, fill: 'forwards', easing: 'ease-in' }
        );
      }
    });
  }

  getTransform(): string {
    const offset = this.currentImageIndex * 100;
    return `translateX(-${offset}%)`;
  }

  isActive(index: number): boolean {
    return index === this.currentImageIndex;
  }

  nextImage() {
    this.isTransitioning = true;
    this.currentImageIndex++;

    // If we've reached the end of the second copy, reset to the start of the middle copy
    if (this.currentImageIndex >= this.galleryImages.length * 2) {
      setTimeout(() => {
        this.isTransitioning = false;
        this.currentImageIndex = this.galleryImages.length;
        // Force reflow
        setTimeout(() => {
          this.isTransitioning = true;
        }, 50);
      }, 500); // Match the CSS transition duration
    }
  }

  navigateToGallery() {
    this.router.navigate(['/gallery']);
  }
}
