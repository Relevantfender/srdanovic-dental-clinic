import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-component.html',
  styleUrl: './header-component.css'
})
export class HeaderComponent {
  isMobileMenuOpen = false;
  expandedMenuItems: { [key: string]: boolean } = {
    services: false,
    aboutUs: false,
    patientResources: false,
    'services-cosmetic': false,
    'aboutUs-clinic': false,
    'patientResources-forms': false
  };

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;

    // Prevent body scroll when menu is open
    if (this.isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      // Close all submenus when closing the main menu
      Object.keys(this.expandedMenuItems).forEach(key => {
        this.expandedMenuItems[key] = false;
      });
    }
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
    document.body.style.overflow = '';
    // Close all submenus
    Object.keys(this.expandedMenuItems).forEach(key => {
      this.expandedMenuItems[key] = false;
    });
  }

  toggleSubmenu(menuKey: string): void {
    this.expandedMenuItems[menuKey] = !this.expandedMenuItems[menuKey];
  }

  toggleNestedSubmenu(menuKey: string): void {
    this.expandedMenuItems[menuKey] = !this.expandedMenuItems[menuKey];
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const sidebar = document.querySelector('.mobile-sidebar');
    const hamburger = document.querySelector('.hamburger-button');

    // Close menu if clicking outside sidebar and hamburger button
    if (this.isMobileMenuOpen &&
        sidebar &&
        hamburger &&
        !sidebar.contains(target) &&
        !hamburger.contains(target)) {
      this.closeMobileMenu();
    }
  }
}
