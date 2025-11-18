import { Service, ServiceCategory } from '../models/service.model';

export const SERVICES: Service[] = [
  // Aesthetic Medicine Services
  {
    id: 'botox-fillers',
    slug: 'botox-fillers',
    name: 'Botox & Fillers',
    category: 'aesthetic-medicine',
    description: 'Our advanced Botox and dermal filler treatments help reduce fine lines, wrinkles, and restore facial volume. Using premium products and precise injection techniques, we deliver natural-looking results that enhance your beauty while maintaining your unique features.',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&h=500&fit=crop',
    image1: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop',
    image2: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=400&fit=crop',
    routerLink: '/services/aesthetic-medicine/botox-fillers'
  },
  {
    id: 'laser-treatments',
    slug: 'laser-treatments',
    name: 'Laser Treatments',
    category: 'aesthetic-medicine',
    description: 'State-of-the-art laser technology for skin resurfacing, hair removal, and pigmentation treatment. Our medical-grade lasers are safe, effective, and customized to your skin type and concerns, providing remarkable results with minimal downtime.',
    image: 'https://images.unsplash.com/photo-1629631468494-c7f44dd564c3?w=500&h=500&fit=crop',
    image1: 'https://images.unsplash.com/photo-1629631468494-c7f44dd564c3?w=400&h=400&fit=crop',
    image2: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400&h=400&fit=crop',
    routerLink: '/services/aesthetic-medicine/laser-treatments'
  },
  {
    id: 'chemical-peels',
    slug: 'chemical-peels',
    name: 'Chemical Peels',
    category: 'aesthetic-medicine',
    description: 'Professional chemical peels that exfoliate and rejuvenate your skin, addressing issues like acne scars, sun damage, and uneven texture. Our customized peel treatments reveal smoother, brighter, and more youthful-looking skin.',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=500&h=500&fit=crop',
    image1: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=400&fit=crop',
    image2: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=400&h=400&fit=crop',
    routerLink: '/services/aesthetic-medicine/chemical-peels'
  },
  {
    id: 'microneedling',
    slug: 'microneedling',
    name: 'Microneedling',
    category: 'aesthetic-medicine',
    description: 'Advanced microneedling therapy stimulates collagen production and enhances skin texture. This minimally invasive treatment effectively reduces scars, fine lines, and pores while improving overall skin quality and radiance.',
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=500&h=500&fit=crop',
    image1: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&h=400&fit=crop',
    image2: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=400&fit=crop',
    routerLink: '/services/aesthetic-medicine/microneedling'
  },
  {
    id: 'skin-rejuvenation',
    slug: 'skin-rejuvenation',
    name: 'Skin Rejuvenation',
    category: 'aesthetic-medicine',
    description: 'Comprehensive skin rejuvenation treatments combining multiple modalities to restore your skin\'s youthful glow. From radiofrequency to ultrasound therapy, we offer cutting-edge solutions for tighter, firmer, and more radiant skin.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500&h=500&fit=crop',
    image1: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=400&fit=crop',
    image2: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=400&h=400&fit=crop',
    routerLink: '/services/aesthetic-medicine/skin-rejuvenation'
  },
  {
    id: 'face-contouring',
    slug: 'face-contouring',
    name: 'Face Contouring',
    category: 'aesthetic-medicine',
    description: 'Non-surgical face contouring using advanced dermal fillers and fat reduction techniques. Enhance your facial structure, define your jawline, and achieve balanced, harmonious proportions with our expert contouring treatments.',
    image: 'https://images.unsplash.com/photo-1596178060810-7d11e18ec1ec?w=500&h=500&fit=crop',
    image1: 'https://images.unsplash.com/photo-1596178060810-7d11e18ec1ec?w=400&h=400&fit=crop',
    image2: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&h=400&fit=crop',
    routerLink: '/services/aesthetic-medicine/face-contouring'
  },
  {
    id: 'lip-enhancement',
    slug: 'lip-enhancement',
    name: 'Lip Enhancement',
    category: 'aesthetic-medicine',
    description: 'Artful lip enhancement procedures that add volume, definition, and symmetry to your lips. Our skilled practitioners use premium fillers to create natural, beautiful results tailored to complement your facial features.',
    image: 'https://images.unsplash.com/photo-1515688594390-b649af70d282?w=500&h=500&fit=crop',
    image1: 'https://images.unsplash.com/photo-1515688594390-b649af70d282?w=400&h=400&fit=crop',
    image2: 'https://images.unsplash.com/photo-1596704017254-9b121068ec31?w=400&h=400&fit=crop',
    routerLink: '/services/aesthetic-medicine/lip-enhancement'
  },
  {
    id: 'anti-aging',
    slug: 'anti-aging',
    name: 'Anti-Aging Treatments',
    category: 'aesthetic-medicine',
    description: 'Comprehensive anti-aging solutions combining the latest technologies and proven techniques. From preventative care to corrective treatments, we help you maintain a youthful appearance and slow down the visible signs of aging.',
    image: 'https://images.unsplash.com/photo-1611082800515-0c95e5e1f59f?w=500&h=500&fit=crop',
    image1: 'https://images.unsplash.com/photo-1611082800515-0c95e5e1f59f?w=400&h=400&fit=crop',
    image2: 'https://images.unsplash.com/photo-1523-328-2234-0d5d?w=400&h=400&fit=crop',
    routerLink: '/services/aesthetic-medicine/anti-aging'
  },
  // General Dentistry Services
  {
    id: 'general-dentistry',
    slug: 'general-dentistry',
    name: 'General Dentistry',
    category: 'general-dentistry',
    description: 'Comprehensive dental care including routine checkups, cleanings, and preventive treatments. Our general dentistry services form the foundation of oral health, helping you maintain a healthy smile through regular care and early detection of potential issues.',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=500&h=500&fit=crop',
    image1: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=400&fit=crop',
    image2: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=400&fit=crop',
    routerLink: '/services/general-dentistry/general-dentistry'
  },
  {
    id: 'cosmetic-dentistry',
    slug: 'cosmetic-dentistry',
    name: 'Cosmetic Dentistry',
    category: 'general-dentistry',
    description: 'Transform your smile with our advanced cosmetic dentistry procedures. From veneers to bonding, we offer aesthetic solutions that enhance the appearance of your teeth while maintaining their natural function and health.',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=500&h=500&fit=crop',
    image1: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=400&fit=crop',
    image2: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=400&fit=crop',
    routerLink: '/services/general-dentistry/cosmetic-dentistry'
  },
  {
    id: 'teeth-whitening',
    slug: 'teeth-whitening',
    name: 'Teeth Whitening',
    category: 'general-dentistry',
    description: 'Professional teeth whitening treatments that safely and effectively brighten your smile. Using advanced whitening technology, we remove stains and discoloration to reveal a radiant, confident smile in just one visit.',
    image: 'https://images.unsplash.com/photo-1609840114035-3c981407e80d?w=500&h=500&fit=crop',
    image1: 'https://images.unsplash.com/photo-1609840114035-3c981407e80d?w=400&h=400&fit=crop',
    image2: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&h=400&fit=crop',
    routerLink: '/services/general-dentistry/teeth-whitening'
  },
  {
    id: 'dental-implants',
    slug: 'dental-implants',
    name: 'Dental Implants',
    category: 'general-dentistry',
    description: 'State-of-the-art dental implant solutions for missing teeth. Our implants provide a permanent, natural-looking replacement that restores both function and aesthetics, giving you the confidence to eat, speak, and smile without worry.',
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=500&h=500&fit=crop',
    image1: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=400&h=400&fit=crop',
    image2: 'https://images.unsplash.com/photo-1606811841474-0d0e0a6e8c94?w=400&h=400&fit=crop',
    routerLink: '/services/general-dentistry/dental-implants'
  },
  {
    id: 'orthodontics',
    slug: 'orthodontics',
    name: 'Orthodontics',
    category: 'general-dentistry',
    description: 'Comprehensive orthodontic treatments including traditional braces and clear aligners. We straighten teeth, correct bite issues, and create beautiful, healthy smiles for patients of all ages using the latest orthodontic technology.',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=500&h=500&fit=crop',
    image1: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=400&fit=crop',
    image2: 'https://images.unsplash.com/photo-1606811841474-0d0e0a6e8c94?w=400&h=400&fit=crop',
    routerLink: '/services/general-dentistry/orthodontics'
  },
  {
    id: 'root-canal',
    slug: 'root-canal',
    name: 'Root Canal Treatment',
    category: 'general-dentistry',
    description: 'Gentle and effective root canal therapy to save infected or damaged teeth. Using modern techniques and anesthesia, we eliminate pain and preserve your natural tooth structure, avoiding the need for extraction.',
    image: 'https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=500&h=500&fit=crop',
    image1: 'https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=400&h=400&fit=crop',
    image2: 'https://images.unsplash.com/photo-1609840114035-3c981407e80d?w=400&h=400&fit=crop',
    routerLink: '/services/general-dentistry/root-canal'
  },
  {
    id: 'periodontics',
    slug: 'periodontics',
    name: 'Periodontics',
    category: 'general-dentistry',
    description: 'Specialized treatment for gum disease and periodontal health. Our periodontal services focus on preventing, diagnosing, and treating conditions affecting the gums and supporting structures of your teeth.',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=500&h=500&fit=crop',
    image1: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=400&fit=crop',
    image2: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=400&h=400&fit=crop',
    routerLink: '/services/general-dentistry/periodontics'
  },
  {
    id: 'oral-surgery',
    slug: 'oral-surgery',
    name: 'Oral Surgery',
    category: 'general-dentistry',
    description: 'Expert oral surgery procedures including wisdom teeth extraction, jaw surgery, and corrective procedures. Our skilled surgeons use advanced techniques to ensure comfortable, successful outcomes for complex dental procedures.',
    image: 'https://images.unsplash.com/photo-1629909615957-be38b9e5af45?w=500&h=500&fit=crop',
    image1: 'https://images.unsplash.com/photo-1629909615957-be38b9e5af45?w=400&h=400&fit=crop',
    image2: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=400&fit=crop',
    routerLink: '/services/general-dentistry/oral-surgery'
  },
  {
    id: 'pediatric-dentistry',
    slug: 'pediatric-dentistry',
    name: 'Pediatric Dentistry',
    category: 'general-dentistry',
    description: 'Specialized dental care designed specifically for children. Our pediatric dentistry services create positive experiences that build healthy habits and confident smiles from an early age in a fun, friendly environment.',
    image: 'https://images.unsplash.com/photo-1598531228433-d9f0bb6c0d99?w=500&h=500&fit=crop',
    image1: 'https://images.unsplash.com/photo-1598531228433-d9f0bb6c0d99?w=400&h=400&fit=crop',
    image2: 'https://images.unsplash.com/photo-1606811841474-0d0e0a6e8c94?w=400&h=400&fit=crop',
    routerLink: '/services/general-dentistry/pediatric-dentistry'
  },
  {
    id: 'emergency-care',
    slug: 'emergency-care',
    name: 'Emergency Dental Care',
    category: 'general-dentistry',
    description: 'Immediate dental care when you need it most. Our emergency services address urgent dental issues including severe pain, trauma, infections, and broken teeth, providing prompt relief and comprehensive treatment.',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=500&h=500&fit=crop',
    image1: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=400&fit=crop',
    image2: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=400&fit=crop',
    routerLink: '/services/general-dentistry/emergency-care'
  }
];

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'aesthetic-medicine',
    name: 'aesthetic-medicine',
    displayName: 'Aesthetic Medicine',
    services: SERVICES.filter(s => s.category === 'aesthetic-medicine')
  },
  {
    id: 'general-dentistry',
    name: 'general-dentistry',
    displayName: 'General Dentistry',
    services: SERVICES.filter(s => s.category === 'general-dentistry')
  }
];

export function getServiceBySlug(category: string, slug: string): Service | undefined {
  return SERVICES.find(s => s.category === category && s.slug === slug);
}

export function getServicesByCategory(category: string): Service[] {
  return SERVICES.filter(s => s.category === category);
}
