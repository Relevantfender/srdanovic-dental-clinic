import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCarouselComponent, ServiceItem } from '../../shared/service-carousel/service-carousel';

@Component({
  selector: 'app-dentistry-page',
  standalone: true,
  imports: [CommonModule, ServiceCarouselComponent],
  templateUrl: './dentistry-page.html',
  styleUrl: './dentistry-page.css'
})
export class DentistryPage {
  dentistryServices: ServiceItem[] = [
    {
      name: 'General Dentistry',
      image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=500&h=500&fit=crop',
      routerLink: '/dentistry/general-dentistry'
    },
    {
      name: 'Cosmetic Dentistry',
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=500&h=500&fit=crop',
      routerLink: '/dentistry/cosmetic-dentistry'
    },
    {
      name: 'Teeth Whitening',
      image: 'https://images.unsplash.com/photo-1609840114035-3c981407e80d?w=500&h=500&fit=crop',
      routerLink: '/dentistry/teeth-whitening'
    },
    {
      name: 'Dental Implants',
      image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=500&h=500&fit=crop',
      routerLink: '/dentistry/dental-implants'
    },
    {
      name: 'Orthodontics',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=500&h=500&fit=crop',
      routerLink: '/dentistry/orthodontics'
    },
    {
      name: 'Root Canal Treatment',
      image: 'https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=500&h=500&fit=crop',
      routerLink: '/dentistry/root-canal'
    },
    {
      name: 'Periodontics',
      image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=500&h=500&fit=crop',
      routerLink: '/dentistry/periodontics'
    },
    {
      name: 'Oral Surgery',
      image: 'https://images.unsplash.com/photo-1629909615957-be38b9e5af45?w=500&h=500&fit=crop',
      routerLink: '/dentistry/oral-surgery'
    },
    {
      name: 'Pediatric Dentistry',
      image: 'https://images.unsplash.com/photo-1598531228433-d9f0bb6c0d99?w=500&h=500&fit=crop',
      routerLink: '/dentistry/pediatric-dentistry'
    },
    {
      name: 'Emergency Dental Care',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=500&h=500&fit=crop',
      routerLink: '/dentistry/emergency-care'
    }
  ];
}
