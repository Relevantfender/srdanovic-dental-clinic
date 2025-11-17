import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ServiceDetail {
  name: string;
  description: string;
  image1: string;
  image2: string;
}

@Component({
  selector: 'app-service-detail-view',
  templateUrl: './service-detail-view.html',
  styleUrls: ['./service-detail-view.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ServiceDetailViewComponent {
  @Input() selectedService: ServiceDetail | null = null;
}
