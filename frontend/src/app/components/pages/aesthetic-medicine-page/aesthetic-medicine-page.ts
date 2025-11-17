import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCarouselComponent, ServiceItem } from '../../shared/service-carousel/service-carousel';
import { ServiceDetailViewComponent, ServiceDetail } from '../../shared/service-detail-view/service-detail-view';

@Component({
  selector: 'app-aesthetic-medicine-page',
  standalone: true,
  imports: [CommonModule, ServiceCarouselComponent, ServiceDetailViewComponent],
  templateUrl: './aesthetic-medicine-page.html',
  styleUrl: './aesthetic-medicine-page.css'
})
export class AestheticMedicinePage {
  selectedServiceDetail: ServiceDetail | null = null;

  // Map of service details with dummy data
  serviceDetailsMap: { [key: string]: ServiceDetail } = {
    'Botox & Fillers': {
      name: 'Botox & Fillers',
      description: 'Our advanced Botox and dermal filler treatments help reduce fine lines, wrinkles, and restore facial volume. Using premium products and precise injection techniques, we deliver natural-looking results that enhance your beauty while maintaining your unique features.',
      image1: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop',
      image2: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=400&fit=crop'
    },
    'Laser Treatments': {
      name: 'Laser Treatments',
      description: 'State-of-the-art laser technology for skin resurfacing, hair removal, and pigmentation treatment. Our medical-grade lasers are safe, effective, and customized to your skin type and concerns, providing remarkable results with minimal downtime.',
      image1: 'https://images.unsplash.com/photo-1629631468494-c7f44dd564c3?w=400&h=400&fit=crop',
      image2: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400&h=400&fit=crop'
    },
    'Chemical Peels': {
      name: 'Chemical Peels',
      description: 'Professional chemical peels that exfoliate and rejuvenate your skin, addressing issues like acne scars, sun damage, and uneven texture. Our customized peel treatments reveal smoother, brighter, and more youthful-looking skin.',
      image1: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=400&fit=crop',
      image2: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=400&h=400&fit=crop'
    },
    'Microneedling': {
      name: 'Microneedling',
      description: 'Advanced microneedling therapy stimulates collagen production and enhances skin texture. This minimally invasive treatment effectively reduces scars, fine lines, and pores while improving overall skin quality and radiance.',
      image1: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&h=400&fit=crop',
      image2: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=400&fit=crop'
    },
    'Skin Rejuvenation': {
      name: 'Skin Rejuvenation',
      description: 'Comprehensive skin rejuvenation treatments combining multiple modalities to restore your skin\'s youthful glow. From radiofrequency to ultrasound therapy, we offer cutting-edge solutions for tighter, firmer, and more radiant skin.',
      image1: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=400&fit=crop',
      image2: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=400&h=400&fit=crop'
    },
    'Face Contouring': {
      name: 'Face Contouring',
      description: 'Non-surgical face contouring using advanced dermal fillers and fat reduction techniques. Enhance your facial structure, define your jawline, and achieve balanced, harmonious proportions with our expert contouring treatments.',
      image1: 'https://images.unsplash.com/photo-1596178060810-7d11e18ec1ec?w=400&h=400&fit=crop',
      image2: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&h=400&fit=crop'
    },
    'Lip Enhancement': {
      name: 'Lip Enhancement',
      description: 'Artful lip enhancement procedures that add volume, definition, and symmetry to your lips. Our skilled practitioners use premium fillers to create natural, beautiful results tailored to complement your facial features.',
      image1: 'https://images.unsplash.com/photo-1515688594390-b649af70d282?w=400&h=400&fit=crop',
      image2: 'https://images.unsplash.com/photo-1596704017254-9b121068ec31?w=400&h=400&fit=crop'
    },
    'Anti-Aging Treatments': {
      name: 'Anti-Aging Treatments',
      description: 'Comprehensive anti-aging solutions combining the latest technologies and proven techniques. From preventative care to corrective treatments, we help you maintain a youthful appearance and slow down the visible signs of aging.',
      image1: 'https://images.unsplash.com/photo-1611082800515-0c95e5e1f59f?w=400&h=400&fit=crop',
      image2: 'https://images.unsplash.com/photo-1523-328-2234-0d5d?w=400&h=400&fit=crop'
    }
  };
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

  onServiceSelected(service: ServiceItem): void {
    this.selectedServiceDetail = this.serviceDetailsMap[service.name] || null;
  }
}
