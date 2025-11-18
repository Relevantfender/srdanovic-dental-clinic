export interface Service {
  id: string;
  slug: string;
  name: string;
  category: 'aesthetic-medicine' | 'general-dentistry';
  subcategory?: string; // For future expansion
  description: string;
  image: string;
  image1: string;
  image2: string;
  routerLink: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  displayName: string;
  services: Service[];
}
