import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryService, PatientGallery } from '../../../services/gallery.service';

@Component({
  selector: 'app-gallery-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery-page.html',
  styleUrl: './gallery-page.css'
})
export class GalleryPage implements OnInit {
  private galleryService = inject(GalleryService);

  patients: PatientGallery[] = [];
  selectedPatient: PatientGallery | null = null;
  currentImageIndex = 0;

  ngOnInit() {
    this.patients = this.galleryService.getAllPatients();
  }

  openPatientGallery(patient: PatientGallery) {
    this.selectedPatient = patient;
    this.currentImageIndex = 0;
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
}
