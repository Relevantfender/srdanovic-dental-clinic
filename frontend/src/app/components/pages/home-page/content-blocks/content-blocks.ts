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

  currentDoctorIndex = 0;

  get currentDoctor() {
    return this.doctors[this.currentDoctorIndex];
  }

  nextDoctor() {
    this.currentDoctorIndex = (this.currentDoctorIndex + 1) % this.doctors.length;
  }
}
