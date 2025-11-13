import { Component, HostListener, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scroll-intro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scroll-intro.html',
  styleUrl: './scroll-intro.css'
})
export class ScrollIntroComponent implements AfterViewInit {
  logoTranslateY = 150;
  logoOpacity = 0;
  welcomeOpacity = 0;
  descriptionOpacity = 0;
  logoOffsetX = 0;

  private componentTop = 0;
  private componentHeight = 0;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    // Get component position after view is initialized
    setTimeout(() => {
      this.updateComponentPosition();
      this.onScroll(); // Initial calculation
    }, 100);
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.updateComponentPosition();
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    // How far down the page we've scrolled (component's top position relative to viewport bottom)
    const componentViewportPosition = this.componentTop - scrollY - windowHeight;

    // Calculate scroll progress based on component visibility
    // When component just enters view: progress = 0
    // When component is centered in viewport: progress = 1
    const scrollRange = windowHeight + (this.componentHeight / 2);
    const scrollProgress = Math.min(Math.max(1 - (componentViewportPosition + windowHeight) / scrollRange, 0), 1);

    // Logo pans in from 0-60% of scroll progress (starts from bottom, settles at center)
    if (scrollProgress <= 0.6) {
      const logoProgress = scrollProgress / 0.6;
      this.logoTranslateY = 150 - (logoProgress * 150); // From bottom (+150%) to center (0%)
      this.logoOpacity = logoProgress;

      // Logo moves to 50% right offset on desktop
      if (window.innerWidth > 768) {
        this.logoOffsetX = logoProgress * 50;
      } else {
        this.logoOffsetX = 0;
      }
    } else {
      this.logoTranslateY = 0;
      this.logoOpacity = 1;
      this.logoOffsetX = window.innerWidth > 768 ? 50 : 0;
    }

    // Welcome text appears at 60-75% of scroll progress
    if (scrollProgress < 0.6) {
      this.welcomeOpacity = 0;
    } else if (scrollProgress >= 0.6 && scrollProgress <= 0.75) {
      this.welcomeOpacity = (scrollProgress - 0.6) / 0.15;
    } else {
      this.welcomeOpacity = 1;
    }

    // Description appears at 75-90% of scroll progress
    if (scrollProgress < 0.75) {
      this.descriptionOpacity = 0;
    } else if (scrollProgress >= 0.75 && scrollProgress <= 0.9) {
      this.descriptionOpacity = (scrollProgress - 0.75) / 0.15;
    } else {
      this.descriptionOpacity = 1;
    }
  }

  @HostListener('window:resize', [])
  onResize(): void {
    this.updateComponentPosition();
    this.onScroll(); // Recalculate on resize
  }

  private updateComponentPosition(): void {
    const element = this.elementRef.nativeElement;
    const rect = element.getBoundingClientRect();
    this.componentTop = rect.top + window.scrollY;
    this.componentHeight = rect.height;
  }
}
