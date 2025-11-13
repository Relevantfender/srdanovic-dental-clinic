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
  backgroundOpacity = 0;
  logoTranslateY = 100;
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
    }, 100);
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.updateComponentPosition();
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    // Calculate how much of the component is in view
    const componentVisible = scrollY + windowHeight - this.componentTop;
    const scrollProgress = Math.min(Math.max(componentVisible / this.componentHeight, 0), 1);

    // Background fades in from 0-30% of scroll progress
    if (scrollProgress <= 0.3) {
      this.backgroundOpacity = scrollProgress / 0.3;
    } else {
      this.backgroundOpacity = 1;
    }

    // Logo pans in from 20-60% of scroll progress
    if (scrollProgress < 0.2) {
      this.logoTranslateY = 100;
      this.logoOpacity = 0;
      this.logoOffsetX = 0;
    } else if (scrollProgress >= 0.2 && scrollProgress <= 0.6) {
      const logoProgress = (scrollProgress - 0.2) / 0.4;
      this.logoTranslateY = 100 - (logoProgress * 100);
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

    // Title appears at 60-70% of scroll progress
    if (scrollProgress < 0.6) {
      this.titleOpacity = 0;
    } else if (scrollProgress >= 0.6 && scrollProgress <= 0.7) {
      this.titleOpacity = (scrollProgress - 0.6) / 0.1;
    } else {
      this.titleOpacity = 1;
    }

    // Welcome text appears at 70-80% of scroll progress
    if (scrollProgress < 0.7) {
      this.welcomeOpacity = 0;
    } else if (scrollProgress >= 0.7 && scrollProgress <= 0.8) {
      this.welcomeOpacity = (scrollProgress - 0.7) / 0.1;
    } else {
      this.welcomeOpacity = 1;
    }

    // Description appears at 80-100% of scroll progress
    if (scrollProgress < 0.8) {
      this.descriptionOpacity = 0;
    } else if (scrollProgress >= 0.8 && scrollProgress <= 1) {
      this.descriptionOpacity = (scrollProgress - 0.8) / 0.2;
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
