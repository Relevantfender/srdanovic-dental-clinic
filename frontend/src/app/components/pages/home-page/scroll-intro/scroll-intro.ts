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

    // Calculate how much of the component is visible in viewport
    // When component bottom enters viewport bottom: progress = 0
    // When component top reaches viewport top: progress = 1
    const componentBottom = this.componentTop + this.componentHeight;
    const viewportBottom = scrollY + windowHeight;

    // Distance scrolled into the component
    const scrolledIntoView = viewportBottom - this.componentTop;
    const totalScrollDistance = this.componentHeight + windowHeight;

    // Raw scroll progress (can go beyond 0-1)
    const rawProgress = scrolledIntoView / totalScrollDistance;
    const scrollProgress = Math.min(Math.max(rawProgress, 0), 1);

    // Logo animation tied to welcome text timing
    const maxTranslateY = 200; // Start from bottom
    const welcomeTextPosition = 0; // Center position where welcome text appears
    const isMobile = window.innerWidth <= 768;
    const finalPosition = isMobile ? -100 : -200; // Mobile goes to -100%, desktop to -200%
    const maxOffsetX = isMobile ? 0 : 280;

    // Logo reaches welcome text position at 35% (when welcome text is 100% opacity)
    // Then continues moving up in straight line
    if (scrollProgress <= 0.35) {
      // 0-35% scroll: Logo moves from bottom to welcome text position
      const logoProgress = scrollProgress / 0.35;
      this.logoTranslateY = maxTranslateY - (logoProgress * (maxTranslateY - welcomeTextPosition));
      this.logoOffsetX = maxOffsetX * logoProgress;
    } else {
      // 35-100% scroll: Logo continues moving up past welcome text in straight line
      const continueProgress = (scrollProgress - 0.35) / 0.65;
      this.logoTranslateY = welcomeTextPosition + (continueProgress * (finalPosition - welcomeTextPosition));
      this.logoOffsetX = maxOffsetX;
    }

    // All elements reach full opacity by 50% scroll progress
    // Logo opacity: 0-20% scroll progress (very fast fade-in to ensure 100% visibility)
    if (scrollProgress < 0.2) {
      this.logoOpacity = scrollProgress / 0.2;
    } else {
      // On mobile, slightly reduce opacity (0.85), on desktop keep at 1
      this.logoOpacity = isMobile ? 0.85 : 1;
    }

    // Welcome text: 15-35% scroll progress
    if (scrollProgress < 0.15) {
      this.welcomeOpacity = 0;
    } else if (scrollProgress < 0.35) {
      this.welcomeOpacity = (scrollProgress - 0.15) / 0.2;
    } else {
      this.welcomeOpacity = 1;
    }

    // Description: 25-45% scroll progress
    if (scrollProgress < 0.25) {
      this.descriptionOpacity = 0;
    } else if (scrollProgress < 0.45) {
      this.descriptionOpacity = (scrollProgress - 0.25) / 0.2;
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
