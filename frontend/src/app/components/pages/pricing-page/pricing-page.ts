import { Component, inject, OnInit, AfterViewInit, ElementRef } from '@angular/core';
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
  showCalculator = false;
  selectedCategoryId: string | null = null;
  expandedSpecializations: Set<number> = new Set();

  // Quantity dialog state
  showQuantityDialog = false;
  editingCartItem: CartItem | null = null;
  tempQuantity = 1;

  ngOnInit() {
    this.categories = this.pricingService.getCategories();
  }

  toggleCalculator() {
    this.showCalculator = !this.showCalculator;
  }

  selectCategory(categoryId: string) {
    if (this.selectedCategoryId === categoryId) {
      this.selectedCategoryId = null;
      this.expandedSpecializations.clear();
    } else {
      this.selectedCategoryId = categoryId;
      this.expandedSpecializations.clear();

      // Trigger animations after the DOM updates
      setTimeout(() => {
        this.animateSpecializations();
      }, 0);
    }
  }

  toggleSpecialization(specId: number, event: Event) {
    const button = event.currentTarget as HTMLElement;
    const section = button.closest('.specialization-section');

    if (this.expandedSpecializations.has(specId)) {
      // Collapse animation
      const itemsList = section?.querySelector('.items-list') as HTMLElement;
      if (itemsList) {
        const currentHeight = itemsList.scrollHeight;
        itemsList.style.height = currentHeight + 'px';
        itemsList.offsetHeight; // Force reflow
        itemsList.style.height = '0px';

        // Wait for animation to complete before removing from set
        setTimeout(() => {
          this.expandedSpecializations.delete(specId);
        }, 400);
      } else {
        this.expandedSpecializations.delete(specId);
      }
    } else {
      this.expandedSpecializations.add(specId);
      // Expand animation will happen after DOM update
      setTimeout(() => {
        const itemsList = section?.querySelector('.items-list') as HTMLElement;
        if (itemsList) {
          const targetHeight = itemsList.scrollHeight;
          itemsList.style.height = '0px';
          itemsList.offsetHeight; // Force reflow
          itemsList.style.height = targetHeight + 'px';

          // Animate individual items
          const items = itemsList.querySelectorAll('.price-item');
          items.forEach((item, index) => {
            setTimeout(() => {
              (item as HTMLElement).animate([
                { opacity: 0, transform: 'translateX(-20px)' },
                { opacity: 1, transform: 'translateX(0)' }
              ], {
                duration: 300,
                easing: 'ease-out',
                fill: 'forwards'
              });
            }, index * 50);
          });

          // Remove inline height after animation completes
          setTimeout(() => {
            itemsList.style.height = '';
          }, 400);
        }
      }, 0);
    }
  }

  isCategorySelected(categoryId: string): boolean {
    return this.selectedCategoryId === categoryId;
  }

  getSelectedCategory(): Category | undefined {
    return this.categories.find(c => c.id === this.selectedCategoryId);
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
      // Deselect if already in cart
      this.removeFromCart(existingItem);
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

  // Quantity dialog methods
  openQuantityDialog(cartItem: CartItem, event: Event) {
    event.stopPropagation();
    this.editingCartItem = cartItem;
    this.tempQuantity = cartItem.quantity;
    this.showQuantityDialog = true;
  }

  closeQuantityDialog() {
    this.showQuantityDialog = false;
    this.editingCartItem = null;
  }

  incrementQuantity() {
    if (this.tempQuantity < 32) {
      this.tempQuantity++;
    }
  }

  decrementQuantity() {
    if (this.tempQuantity > 0) {
      this.tempQuantity--;
    }
  }

  onQuantityInput(event: Event) {
    const input = event.target as HTMLInputElement;
    let value = input.value;

    // Remove any non-digit characters (including 'e', 'E', '+', '-', '.')
    value = value.replace(/[^0-9]/g, '');

    // Parse as integer
    let numValue = parseInt(value, 10);

    // Handle empty input or invalid number
    if (isNaN(numValue)) {
      numValue = 0;
    }

    // Clamp between 0 and 32
    numValue = Math.max(0, Math.min(32, numValue));

    this.tempQuantity = numValue;
    input.value = numValue.toString();
  }

  saveQuantity() {
    if (this.editingCartItem) {
      if (this.tempQuantity === 0) {
        // Remove item if quantity is 0
        this.removeFromCart(this.editingCartItem);
      } else {
        this.editingCartItem.quantity = this.tempQuantity;
      }
    }
    this.closeQuantityDialog();
  }

  private animateSpecializations(): void {
    const sections = document.querySelectorAll('.specialization-section');

    sections.forEach((section, index) => {
      setTimeout(() => {
        (section as HTMLElement).animate([
          { opacity: 0, transform: 'translateY(20px)' },
          { opacity: 1, transform: 'translateY(0)' }
        ], {
          duration: 400,
          easing: 'ease-out',
          fill: 'forwards'
        });
      }, index * 100);
    });
  }
}
