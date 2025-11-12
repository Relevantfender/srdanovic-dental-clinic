import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content-blocks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-blocks.html',
  styleUrl: './content-blocks.css'
})
export class ContentBlocksComponent {
  // Placeholder doctor data
  doctors = [
    { name: 'Dr. John Smith', specialty: 'General Dentist' },
    { name: 'Dr. Sarah Johnson', specialty: 'Orthodontist' },
    { name: 'Dr. Michael Brown', specialty: 'Periodontist' },
    { name: 'Dr. Emily Davis', specialty: 'Endodontist' },
    { name: 'Dr. Robert Wilson', specialty: 'Oral Surgeon' }
  ];

  // Create an infinite loop by tripling the array
  infiniteDoctors = [...this.doctors, ...this.doctors, ...this.doctors];
  currentDoctorIndex = this.doctors.length; // Start at the middle copy
  isTransitioning = true;

  getTransform(): string {
    const offset = this.currentDoctorIndex * 100;
    return `translateX(-${offset}%)`;
  }

  isActive(index: number): boolean {
    return index === this.currentDoctorIndex;
  }

  nextDoctor() {
    this.isTransitioning = true;
    this.currentDoctorIndex++;

    // If we've reached the end of the second copy, reset to the start of the middle copy
    if (this.currentDoctorIndex >= this.doctors.length * 2) {
      setTimeout(() => {
        this.isTransitioning = false;
        this.currentDoctorIndex = this.doctors.length;
        // Force reflow
        setTimeout(() => {
          this.isTransitioning = true;
        }, 50);
      }, 500); // Match the CSS transition duration
    }
  }
}
