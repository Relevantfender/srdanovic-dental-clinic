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
  logoTranslateY = 200;
  logoOpacity = 0;
  titleOpacity = 0;
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

    // Calculate scroll progress: 0 when component enters bottom of viewport, 1 when it reaches middle
    const componentMiddle = this.componentTop + (this.componentHeight / 2);
    const viewportMiddle = scrollY + (windowHeight / 2);

    // Distance from when component first enters view to when it's at viewport middle
    const startScroll = this.componentTop - windowHeight;
    const endScroll = componentMiddle - (windowHeight / 2);
    const scrollRange = endScroll - startScroll;

    const scrollProgress = Math.min(Math.max((scrollY - startScroll) / scrollRange, 0), 1);

    // Logo pans in from 0-50% of scroll progress (starts from bottom, settles at center)
    if (scrollProgress <= 0.5) {
      const logoProgress = scrollProgress / 0.5;
      this.logoTranslateY = 200 - (logoProgress * 200); // From bottom (+200%) to center (0%)
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

    // Title appears at 50-60% of scroll progress
    if (scrollProgress < 0.5) {
      this.titleOpacity = 0;
    } else if (scrollProgress >= 0.5 && scrollProgress <= 0.6) {
      this.titleOpacity = (scrollProgress - 0.5) / 0.1;
    } else {
      this.titleOpacity = 1;
    }

    // Welcome text appears at 60-70% of scroll progress
    if (scrollProgress < 0.6) {
      this.welcomeOpacity = 0;
    } else if (scrollProgress >= 0.6 && scrollProgress <= 0.7) {
      this.welcomeOpacity = (scrollProgress - 0.6) / 0.1;
    } else {
      this.welcomeOpacity = 1;
    }

    // Description appears at 70-80% of scroll progress
    if (scrollProgress < 0.7) {
      this.descriptionOpacity = 0;
    } else if (scrollProgress >= 0.7 && scrollProgress <= 0.8) {
      this.descriptionOpacity = (scrollProgress - 0.7) / 0.1;
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
