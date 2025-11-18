import { Injectable } from '@angular/core';

export interface PriceItem {
  id: number;
  name: string;
  price: number; // in euros
}

export interface Specialization {
  id: number;
  name: string;
  items: PriceItem[];
}

export interface Category {
  id: string;
  name: string;
  specializations: Specialization[];
}

export interface CartItem {
  item: PriceItem;
  quantity: number;
  specialization: string;
  category: string;
}

@Injectable({
  providedIn: 'root'
})
export class PricingService {
  private categories: Category[] = [
    {
      id: 'dentistry',
      name: 'Dentistry',
      specializations: [
        {
          id: 1,
          name: 'General Dentistry',
          items: [
            { id: 101, name: 'Dental Examination', price: 50 },
            { id: 102, name: 'Teeth Cleaning', price: 80 },
            { id: 103, name: 'Cavity Filling', price: 120 },
            { id: 104, name: 'Tooth Extraction', price: 150 },
            { id: 105, name: 'Root Canal Treatment', price: 350 }
          ]
        },
        {
          id: 2,
          name: 'Cosmetic Dentistry',
          items: [
            { id: 201, name: 'Teeth Whitening', price: 300 },
            { id: 202, name: 'Porcelain Veneers (per tooth)', price: 600 },
            { id: 203, name: 'Dental Bonding', price: 200 },
            { id: 204, name: 'Smile Makeover Consultation', price: 100 }
          ]
        },
        {
          id: 3,
          name: 'Orthodontics',
          items: [
            { id: 301, name: 'Braces (Metal)', price: 2500 },
            { id: 302, name: 'Braces (Ceramic)', price: 3500 },
            { id: 303, name: 'Invisalign Treatment', price: 4500 },
            { id: 304, name: 'Retainer', price: 300 }
          ]
        },
        {
          id: 4,
          name: 'Oral Surgery',
          items: [
            { id: 401, name: 'Wisdom Tooth Removal', price: 250 },
            { id: 402, name: 'Dental Implant', price: 1500 },
            { id: 403, name: 'Bone Grafting', price: 800 },
            { id: 404, name: 'Gum Surgery', price: 600 }
          ]
        }
      ]
    },
    {
      id: 'aesthetic',
      name: 'Aesthetic Medicine',
      specializations: [
        {
          id: 5,
          name: 'Facial Treatments',
          items: [
            { id: 501, name: 'Botox Injection (per area)', price: 250 },
            { id: 502, name: 'Dermal Fillers (1ml)', price: 400 },
            { id: 503, name: 'Lip Enhancement', price: 450 },
            { id: 504, name: 'Cheek Augmentation', price: 500 }
          ]
        },
        {
          id: 6,
          name: 'Skin Rejuvenation',
          items: [
            { id: 601, name: 'Chemical Peel', price: 200 },
            { id: 602, name: 'Microdermabrasion', price: 150 },
            { id: 603, name: 'Laser Skin Resurfacing', price: 800 },
            { id: 604, name: 'PRP Facial Treatment', price: 500 }
          ]
        },
        {
          id: 7,
          name: 'Anti-Aging',
          items: [
            { id: 701, name: 'Thread Lift', price: 1200 },
            { id: 702, name: 'Skin Tightening', price: 600 },
            { id: 703, name: 'Dark Circle Treatment', price: 350 },
            { id: 704, name: 'Neck Rejuvenation', price: 700 }
          ]
        }
      ]
    }
  ];

  getCategories(): Category[] {
    return this.categories;
  }

  getCategoryById(id: string): Category | undefined {
    return this.categories.find(cat => cat.id === id);
  }
}
