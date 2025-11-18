import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content-blocks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-blocks.html',
  styleUrl: './content-blocks.css'
})
export class ContentBlocksComponent {
  private router = inject(Router);

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
