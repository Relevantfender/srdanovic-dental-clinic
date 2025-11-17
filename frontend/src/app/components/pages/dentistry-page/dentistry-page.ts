import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCarouselComponent, ServiceItem } from '../../shared/service-carousel/service-carousel';
import { ServiceDetailViewComponent, ServiceDetail } from '../../shared/service-detail-view/service-detail-view';

@Component({
  selector: 'app-dentistry-page',
  standalone: true,
  imports: [CommonModule, ServiceCarouselComponent, ServiceDetailViewComponent],
  templateUrl: './dentistry-page.html',
  styleUrl: './dentistry-page.css'
})
export class DentistryPage {
  selectedServiceDetail: ServiceDetail | null = null;

  // Map of service details with dummy data
  serviceDetailsMap: { [key: string]: ServiceDetail } = {
    'General Dentistry': {
      name: 'General Dentistry',
      description: 'Comprehensive dental care including routine checkups, cleanings, and preventive treatments. Our general dentistry services form the foundation of oral health, helping you maintain a healthy smile through regular care and early detection of potential issues.',
      image1: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=400&fit=crop',
      image2: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=400&fit=crop'
    },
    'Cosmetic Dentistry': {
      name: 'Cosmetic Dentistry',
      description: 'Transform your smile with our advanced cosmetic dentistry procedures. From veneers to bonding, we offer aesthetic solutions that enhance the appearance of your teeth while maintaining their natural function and health.',
      image1: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=400&fit=crop',
      image2: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=400&fit=crop'
    },
    'Teeth Whitening': {
      name: 'Teeth Whitening',
      description: 'Professional teeth whitening treatments that safely and effectively brighten your smile. Using advanced whitening technology, we remove stains and discoloration to reveal a radiant, confident smile in just one visit.',
      image1: 'https://images.unsplash.com/photo-1609840114035-3c981407e80d?w=400&h=400&fit=crop',
      image2: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&h=400&fit=crop'
    },
    'Dental Implants': {
      name: 'Dental Implants',
      description: 'State-of-the-art dental implant solutions for missing teeth. Our implants provide a permanent, natural-looking replacement that restores both function and aesthetics, giving you the confidence to eat, speak, and smile without worry.',
      image1: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=400&h=400&fit=crop',
      image2: 'https://images.unsplash.com/photo-1606811841474-0d0e0a6e8c94?w=400&h=400&fit=crop'
    },
    'Orthodontics': {
      name: 'Orthodontics',
      description: 'Comprehensive orthodontic treatments including traditional braces and clear aligners. We straighten teeth, correct bite issues, and create beautiful, healthy smiles for patients of all ages using the latest orthodontic technology.',
      image1: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=400&fit=crop',
      image2: 'https://images.unsplash.com/photo-1606811841474-0d0e0a6e8c94?w=400&h=400&fit=crop'
    },
    'Root Canal Treatment': {
      name: 'Root Canal Treatment',
      description: 'Gentle and effective root canal therapy to save infected or damaged teeth. Using modern techniques and anesthesia, we eliminate pain and preserve your natural tooth structure, avoiding the need for extraction.',
      image1: 'https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=400&h=400&fit=crop',
      image2: 'https://images.unsplash.com/photo-1609840114035-3c981407e80d?w=400&h=400&fit=crop'
    },
    'Periodontics': {
      name: 'Periodontics',
      description: 'Specialized treatment for gum disease and periodontal health. Our periodontal services focus on preventing, diagnosing, and treating conditions affecting the gums and supporting structures of your teeth.',
      image1: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=400&fit=crop',
      image2: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=400&h=400&fit=crop'
    },
    'Oral Surgery': {
      name: 'Oral Surgery',
      description: 'Expert oral surgery procedures including wisdom teeth extraction, jaw surgery, and corrective procedures. Our skilled surgeons use advanced techniques to ensure comfortable, successful outcomes for complex dental procedures.',
      image1: 'https://images.unsplash.com/photo-1629909615957-be38b9e5af45?w=400&h=400&fit=crop',
      image2: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=400&fit=crop'
    },
    'Pediatric Dentistry': {
      name: 'Pediatric Dentistry',
      description: 'Specialized dental care designed specifically for children. Our pediatric dentistry services create positive experiences that build healthy habits and confident smiles from an early age in a fun, friendly environment.',
      image1: 'https://images.unsplash.com/photo-1598531228433-d9f0bb6c0d99?w=400&h=400&fit=crop',
      image2: 'https://images.unsplash.com/photo-1606811841474-0d0e0a6e8c94?w=400&h=400&fit=crop'
    },
    'Emergency Dental Care': {
      name: 'Emergency Dental Care',
      description: 'Immediate dental care when you need it most. Our emergency services address urgent dental issues including severe pain, trauma, infections, and broken teeth, providing prompt relief and comprehensive treatment.',
      image1: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=400&fit=crop',
      image2: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=400&fit=crop'
    }
  };
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

  onServiceSelected(service: ServiceItem): void {
    this.selectedServiceDetail = this.serviceDetailsMap[service.name] || null;
  }
}
