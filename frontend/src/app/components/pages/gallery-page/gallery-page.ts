import { Component, inject, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryService, PatientGallery } from '../../../services/gallery.service';

@Component({
  selector: 'app-gallery-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery-page.html',
  styleUrl: './gallery-page.css'
})
export class GalleryPage implements OnInit, AfterViewInit {
  private galleryService = inject(GalleryService);

  @ViewChild('carouselTrack') carouselTrack!: ElementRef<HTMLDivElement>;

  patients: PatientGallery[] = [];
  selectedPatient: PatientGallery | null = null;
  currentImageIndex = 0;

  ngOnInit() {
    this.patients = this.galleryService.getAllPatients();
  }

  ngAfterViewInit() {
    // Initial centering after view is ready
    if (this.selectedPatient) {
      setTimeout(() => this.scrollToActivePatient(), 100);
    }
  }

  openPatientGallery(patient: PatientGallery) {
    this.selectedPatient = patient;
    this.currentImageIndex = 0;
    setTimeout(() => this.scrollToActivePatient(), 50);
  }

  closeLightbox() {
    this.selectedPatient = null;
    this.currentImageIndex = 0;
  }

  selectImage(index: number) {
    this.currentImageIndex = index;
  }

  previousImage() {
    if (this.selectedPatient) {
      this.currentImageIndex =
        (this.currentImageIndex - 1 + this.selectedPatient.detailImages.length) %
        this.selectedPatient.detailImages.length;
    }
  }

  nextImage() {
    if (this.selectedPatient) {
      this.currentImageIndex =
        (this.currentImageIndex + 1) % this.selectedPatient.detailImages.length;
    }
  }

  get currentImage() {
    return this.selectedPatient?.detailImages[this.currentImageIndex];
  }

  previousPatient() {
    if (this.selectedPatient) {
      const currentIndex = this.patients.findIndex(p => p.id === this.selectedPatient!.id);
      const previousIndex = (currentIndex - 1 + this.patients.length) % this.patients.length;
      this.openPatientGallery(this.patients[previousIndex]);
    }
  }

  nextPatient() {
    if (this.selectedPatient) {
      const currentIndex = this.patients.findIndex(p => p.id === this.selectedPatient!.id);
      const nextIndex = (currentIndex + 1) % this.patients.length;
      this.openPatientGallery(this.patients[nextIndex]);
    }
  }

  private scrollToActivePatient() {
    if (!this.carouselTrack || !this.selectedPatient) return;

    const track = this.carouselTrack.nativeElement;
    const activeIndex = this.patients.findIndex(p => p.id === this.selectedPatient!.id);
    const items = track.children;

    if (items[activeIndex]) {
      const item = items[activeIndex] as HTMLElement;
      const trackWidth = track.offsetWidth;
      const itemWidth = item.offsetWidth;
      const itemLeft = item.offsetLeft;

      // Calculate scroll position to center the item
      const scrollPosition = itemLeft - (trackWidth / 2) + (itemWidth / 2);

      track.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }
}
