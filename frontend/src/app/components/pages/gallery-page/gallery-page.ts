import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface GalleryImage {
  id: number;
}

@Component({
  selector: 'app-gallery-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery-page.html',
  styleUrl: './gallery-page.css'
})
export class GalleryPage {
  galleryImages: GalleryImage[] = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
    { id: 11 },
    { id: 12 }
  ];

  selectedImage: GalleryImage | null = null;

  openImage(image: GalleryImage) {
    this.selectedImage = image;
  }

  closeImage() {
    this.selectedImage = null;
  }
}
