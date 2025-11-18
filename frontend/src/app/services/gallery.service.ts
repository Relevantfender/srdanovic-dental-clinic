import { Injectable } from '@angular/core';

export interface PatientImage {
  url: string;
  alt: string;
}

export interface PatientGallery {
  id: number;
  patientName: string;
  thumbnailImage: string; // Person smiling
  smileImage: string; // Close-up smile (for flip effect)
  detailImages: PatientImage[]; // Multiple smile close-ups
}

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  private patients: PatientGallery[] = [
    {
      id: 1,
      patientName: 'Patient 1',
      thumbnailImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      smileImage: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=400&fit=crop',
      detailImages: [
        { url: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=600&fit=crop', alt: 'Smile detail 1' },
        { url: 'https://images.unsplash.com/photo-1609840114035-3c981960afb4?w=800&h=600&fit=crop', alt: 'Smile detail 2' },
        { url: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=600&fit=crop', alt: 'Smile detail 3' }
      ]
    },
    {
      id: 2,
      patientName: 'Patient 2',
      thumbnailImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      smileImage: 'https://images.unsplash.com/photo-1609840112855-9ab5ad8f66e4?w=400&h=400&fit=crop',
      detailImages: [
        { url: 'https://images.unsplash.com/photo-1609840112855-9ab5ad8f66e4?w=800&h=600&fit=crop', alt: 'Smile detail 1' },
        { url: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&h=600&fit=crop', alt: 'Smile detail 2' },
        { url: 'https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=800&h=600&fit=crop', alt: 'Smile detail 3' }
      ]
    },
    {
      id: 3,
      patientName: 'Patient 3',
      thumbnailImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      smileImage: 'https://images.unsplash.com/photo-1609840114035-3c981960afb4?w=400&h=400&fit=crop',
      detailImages: [
        { url: 'https://images.unsplash.com/photo-1609840114035-3c981960afb4?w=800&h=600&fit=crop', alt: 'Smile detail 1' },
        { url: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=600&fit=crop', alt: 'Smile detail 2' },
        { url: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&h=600&fit=crop', alt: 'Smile detail 3' }
      ]
    },
    {
      id: 4,
      patientName: 'Patient 4',
      thumbnailImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      smileImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=400&fit=crop',
      detailImages: [
        { url: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=600&fit=crop', alt: 'Smile detail 1' },
        { url: 'https://images.unsplash.com/photo-1609840112855-9ab5ad8f66e4?w=800&h=600&fit=crop', alt: 'Smile detail 2' },
        { url: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=600&fit=crop', alt: 'Smile detail 3' }
      ]
    },
    {
      id: 5,
      patientName: 'Patient 5',
      thumbnailImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop',
      smileImage: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&h=400&fit=crop',
      detailImages: [
        { url: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&h=600&fit=crop', alt: 'Smile detail 1' },
        { url: 'https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=800&h=600&fit=crop', alt: 'Smile detail 2' },
        { url: 'https://images.unsplash.com/photo-1609840114035-3c981960afb4?w=800&h=600&fit=crop', alt: 'Smile detail 3' }
      ]
    },
    {
      id: 6,
      patientName: 'Patient 6',
      thumbnailImage: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop',
      smileImage: 'https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=400&h=400&fit=crop',
      detailImages: [
        { url: 'https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=800&h=600&fit=crop', alt: 'Smile detail 1' },
        { url: 'https://images.unsplash.com/photo-1609840112855-9ab5ad8f66e4?w=800&h=600&fit=crop', alt: 'Smile detail 2' },
        { url: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=600&fit=crop', alt: 'Smile detail 3' }
      ]
    }
  ];

  getAllPatients(): PatientGallery[] {
    return this.patients;
  }

  getPatientById(id: number): PatientGallery | undefined {
    return this.patients.find(patient => patient.id === id);
  }
}
