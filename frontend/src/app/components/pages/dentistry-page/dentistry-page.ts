import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCarouselComponent, ServiceItem } from '../../shared/service-carousel/service-carousel';
import { ServiceDetailViewComponent, ServiceDetail } from '../../shared/service-detail-view/service-detail-view';
import { getServicesByCategory } from '../../../data/services.data';

@Component({
  selector: 'app-dentistry-page',
  standalone: true,
  imports: [CommonModule, ServiceCarouselComponent, ServiceDetailViewComponent],
  templateUrl: './dentistry-page.html',
  styleUrl: './dentistry-page.css'
})
export class DentistryPage {
  selectedServiceDetail: ServiceDetail | null = null;

  // Load services from centralized data
  dentistryServices: ServiceItem[] = getServicesByCategory('general-dentistry').map(service => ({
    name: service.name,
    image: service.image,
    routerLink: service.routerLink
  }));

  // Map of service details
  serviceDetailsMap: { [key: string]: ServiceDetail } = {};

  constructor() {
    // Build serviceDetailsMap from centralized data
    const services = getServicesByCategory('general-dentistry');
    services.forEach(service => {
      this.serviceDetailsMap[service.name] = {
        name: service.name,
        description: service.description,
        image1: service.image1,
        image2: service.image2
      };
    });
  }

  onServiceSelected(service: ServiceItem): void {
    this.selectedServiceDetail = this.serviceDetailsMap[service.name] || null;
  }
}
