import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCarouselComponent, ServiceItem } from '../../shared/service-carousel/service-carousel';

@Component({
  selector: 'app-aesthetic-medicine-page',
  standalone: true,
  imports: [CommonModule, ServiceCarouselComponent],
  templateUrl: './aesthetic-medicine-page.html',
  styleUrl: './aesthetic-medicine-page.css'
})
export class AestheticMedicinePage {
  aestheticServices: ServiceItem[] = [
    {
      name: 'Botox & Fillers',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&h=500&fit=crop',
      routerLink: '/aesthetic-medicine/botox-fillers'
    },
    {
      name: 'Laser Treatments',
      image: 'https://images.unsplash.com/photo-1629631468494-c7f44dd564c3?w=500&h=500&fit=crop',
      routerLink: '/aesthetic-medicine/laser-treatments'
    },
    {
      name: 'Chemical Peels',
      image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=500&h=500&fit=crop',
      routerLink: '/aesthetic-medicine/chemical-peels'
    },
    {
      name: 'Microneedling',
      image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=500&h=500&fit=crop',
      routerLink: '/aesthetic-medicine/microneedling'
    },
    {
      name: 'Skin Rejuvenation',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500&h=500&fit=crop',
      routerLink: '/aesthetic-medicine/skin-rejuvenation'
    },
    {
      name: 'Face Contouring',
      image: 'https://images.unsplash.com/photo-1596178060810-7d11e18ec1ec?w=500&h=500&fit=crop',
      routerLink: '/aesthetic-medicine/face-contouring'
    },
    {
      name: 'Lip Enhancement',
      image: 'https://images.unsplash.com/photo-1515688594390-b649af70d282?w=500&h=500&fit=crop',
      routerLink: '/aesthetic-medicine/lip-enhancement'
    },
    {
      name: 'Anti-Aging Treatments',
      image: 'https://images.unsplash.com/photo-1611082800515-0c95e5e1f59f?w=500&h=500&fit=crop',
      routerLink: '/aesthetic-medicine/anti-aging'
    }
  ];
}
