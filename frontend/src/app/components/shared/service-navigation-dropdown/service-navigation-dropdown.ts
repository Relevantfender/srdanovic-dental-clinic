import { Component, Input, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SERVICE_CATEGORIES, getServicesByCategory } from '../../../data/services.data';
import { Service } from '../../../models/service.model';

@Component({
  selector: 'app-service-navigation-dropdown',
  templateUrl: './service-navigation-dropdown.html',
  styleUrls: ['./service-navigation-dropdown.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class ServiceNavigationDropdownComponent implements OnInit {
  @Input() currentCategory: string = '';
  @Input() currentServiceSlug: string = '';

  selectedCategory = signal<string>('aesthetic-medicine');
  isDropdownOpen = signal<boolean>(false);
  services = signal<Service[]>([]);

  categories = SERVICE_CATEGORIES;

  ngOnInit(): void {
    // Set initial category based on current route
    if (this.currentCategory) {
      this.selectedCategory.set(this.currentCategory);
    }
    this.loadServices();
  }

  selectCategory(categoryId: string): void {
    this.selectedCategory.set(categoryId);
    this.loadServices();
    // Keep dropdown open when switching categories
  }

  loadServices(): void {
    const categoryServices = getServicesByCategory(this.selectedCategory());
    this.services.set(categoryServices);
  }

  toggleDropdown(): void {
    this.isDropdownOpen.update(val => !val);
    console.log('Dropdown open:', this.isDropdownOpen());
    console.log('Services:', this.services());
  }

  closeDropdown(): void {
    this.isDropdownOpen.set(false);
  }

  getCategoryDisplayName(categoryId: string): string {
    const category = this.categories.find(c => c.id === categoryId);
    return category ? category.displayName : categoryId;
  }

  isCurrentService(service: Service): boolean {
    return service.slug === this.currentServiceSlug && service.category === this.currentCategory;
  }
}
