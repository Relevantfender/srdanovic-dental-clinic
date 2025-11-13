import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class ServicesComponent {
  constructor(private router: Router) {}

  navigateToAestheticMedicine(): void {
    this.router.navigate(['/aesthetic-medicine']);
  }

  navigateToDentistry(): void {
    this.router.navigate(['/dentistry']);
  }
}
