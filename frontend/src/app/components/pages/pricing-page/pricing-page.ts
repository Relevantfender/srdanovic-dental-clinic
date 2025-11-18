import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingService, Category, Specialization, PriceItem, CartItem } from '../../../services/pricing.service';

@Component({
  selector: 'app-pricing-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing-page.html',
  styleUrl: './pricing-page.css'
})
export class PricingPage implements OnInit {
  private pricingService = inject(PricingService);

  categories: Category[] = [];
  cart: CartItem[] = [];

  // View state
  currentView: 'services' | 'calculator' = 'services';
  expandedCategories: Set<string> = new Set();
  expandedSpecializations: Set<number> = new Set();

  ngOnInit() {
    this.categories = this.pricingService.getCategories();
  }

  switchView(view: 'services' | 'calculator') {
    this.currentView = view;
  }

  toggleCategory(categoryId: string) {
    if (this.expandedCategories.has(categoryId)) {
      this.expandedCategories.delete(categoryId);
      // Close all specializations in this category
      const category = this.categories.find(c => c.id === categoryId);
      if (category) {
        category.specializations.forEach(spec =>
          this.expandedSpecializations.delete(spec.id)
        );
      }
    } else {
      this.expandedCategories.add(categoryId);
    }
  }

  toggleSpecialization(specId: number) {
    if (this.expandedSpecializations.has(specId)) {
      this.expandedSpecializations.delete(specId);
    } else {
      this.expandedSpecializations.add(specId);
    }
  }

  isCategoryExpanded(categoryId: string): boolean {
    return this.expandedCategories.has(categoryId);
  }

  isSpecializationExpanded(specId: number): boolean {
    return this.expandedSpecializations.has(specId);
  }

  isItemInCart(itemId: number): boolean {
    return this.cart.some(cartItem => cartItem.item.id === itemId);
  }

  addToCart(item: PriceItem, specialization: Specialization, category: Category) {
    const existingItem = this.cart.find(cartItem => cartItem.item.id === item.id);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cart.push({
        item: item,
        quantity: 1,
        specialization: specialization.name,
        category: category.name
      });
    }
  }

  removeFromCart(cartItem: CartItem) {
    const index = this.cart.indexOf(cartItem);
    if (index > -1) {
      this.cart.splice(index, 1);
    }
  }

  discardAll() {
    this.cart = [];
  }

  getTotalPrice(): number {
    return this.cart.reduce((total, cartItem) =>
      total + (cartItem.item.price * cartItem.quantity), 0
    );
  }

  getTotalItems(): number {
    return this.cart.reduce((total, cartItem) => total + cartItem.quantity, 0);
  }
}
