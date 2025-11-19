import { Component, inject, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryService, PatientGallery } from '../../../services/gallery.service';

@Component({
  selector: 'app-gallery-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery-page.html',
  styleUrl: './gallery-page.css'
})
export class GalleryPage implements OnInit, AfterViewInit, OnDestroy {
  private galleryService = inject(GalleryService);

  @ViewChild('carouselTrack') carouselTrack!: ElementRef<HTMLDivElement>;
  @ViewChild('pageHeader') pageHeader!: ElementRef<HTMLElement>;
  @ViewChild('contentSection') contentSection!: ElementRef<HTMLElement>;
  @ViewChild('galleryGrid') galleryGrid!: ElementRef<HTMLElement>;

  patients: PatientGallery[] = [];
  selectedPatient: PatientGallery | null = null;
  currentImageIndex = 0;
  private observers: IntersectionObserver[] = [];

  ngOnInit() {
    this.patients = this.galleryService.getAllPatients();
  }

  ngAfterViewInit() {
    // Initial centering after view is ready
    if (this.selectedPatient) {
      setTimeout(() => this.scrollToActivePatient(), 100);
    }

    // Setup scroll animations
    this.setupScrollAnimations();
  }

  private setupScrollAnimations(): void {
    const options = {
      threshold: 0.3,
      rootMargin: '0px'
    };

    // Page header animation
    if (this.pageHeader) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.animatePageHeader();
          }
        });
      }, options);
      observer.observe(this.pageHeader.nativeElement);
      this.observers.push(observer);
    }

    // Content section animation
    if (this.contentSection) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.animateContentSection();
          }
        });
      }, options);
      observer.observe(this.contentSection.nativeElement);
      this.observers.push(observer);
    }

    // Gallery grid items animation
    if (this.galleryGrid) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.animateGalleryItems();
          }
        });
      }, options);
      observer.observe(this.galleryGrid.nativeElement);
      this.observers.push(observer);
    }
  }

  private animatePageHeader(): void {
    const element = this.pageHeader.nativeElement;

    element.animate([
      { opacity: 0, transform: 'translateY(50px)' },
      { opacity: 1, transform: 'translateY(0)' }
    ], {
      duration: 800,
      easing: 'ease-out',
      fill: 'forwards'
    });
  }

  private animateContentSection(): void {
    const element = this.contentSection.nativeElement;

    element.animate([
      { opacity: 0, transform: 'translateY(50px)' },
      { opacity: 1, transform: 'translateY(0)' }
    ], {
      duration: 800,
      easing: 'ease-out',
      fill: 'forwards'
    });
  }

  private animateGalleryItems(): void {
    const items = this.galleryGrid.nativeElement.querySelectorAll('.gallery-item');

    items.forEach((item, index) => {
      setTimeout(() => {
        (item as HTMLElement).animate([
          { opacity: 0, transform: 'scale(1.2)' },
          { opacity: 1, transform: 'scale(1)' }
        ], {
          duration: 600,
          easing: 'ease-out',
          fill: 'forwards'
        });
      }, index * 50);
    });
  }

  ngOnDestroy(): void {
    this.observers.forEach(observer => observer.disconnect());
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
