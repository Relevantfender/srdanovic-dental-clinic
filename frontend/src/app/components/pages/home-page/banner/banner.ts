import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  imports: [],
  standalone: true,
  templateUrl: './banner.html',
  styleUrl: './banner.css'
})
export class Banner {
  // Methods for button actions can be added here later
  onAestheticMedicineClick(): void {
    console.log('Aesthetic Medicine clicked');
  }

  onDentalMedicineClick(): void {
    console.log('Dental Medicine clicked');
  }
}
