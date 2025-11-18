import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [],
  templateUrl: './about-us.html',
  styleUrl: './about-us.css'
})
export class AboutUs implements AfterViewInit {
  @ViewChild('aboutSection') aboutSection!: ElementRef<HTMLElement>;
  @ViewChild('leftDiv') leftDiv!: ElementRef<HTMLElement>;
  @ViewChild('rightDiv') rightDiv!: ElementRef<HTMLElement>;
  @ViewChild('textContent') textContent!: ElementRef<HTMLElement>;

  private hasAnimated = false;

  ngAfterViewInit(): void {
    this.setupScrollAnimation();
  }

  private setupScrollAnimation(): void {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // Trigger at 50% visibility
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          if (!this.hasAnimated) {
            this.triggerAnimations();
            this.hasAnimated = true;
          }
        } else if (entry.intersectionRatio < 0.5 && this.hasAnimated) {
          // Reset for re-animation when scrolling back
          this.resetAnimations();
        }
      });
    }, options);

    if (this.aboutSection) {
      observer.observe(this.aboutSection.nativeElement);
    }
  }

  private triggerAnimations(): void {
    // Text animation - fade in at 50%
    const textElement = this.textContent.nativeElement;
    textElement.animate(
      [
        { offset: 0, opacity: 0, transform: 'translateY(20px)' },
        { offset: 0.5, opacity: 0.5, transform: 'translateY(10px)' },
        { offset: 1, opacity: 1, transform: 'translateY(0)' }
      ],
      { duration: 1000, fill: 'forwards', easing: 'ease-out' }
    );

    // Left div animation - comes from top (negative Y) to final position (0)
    // then continues down (positive Y) as it disappears
    const leftElement = this.leftDiv.nativeElement;
    leftElement.animate(
      [
        { offset: 0, transform: 'translateY(-100px)', opacity: 0 },
        { offset: 0.5, transform: 'translateY(0)', opacity: 1 }, // Final position
        { offset: 1, transform: 'translateY(50px)', opacity: 0.3 }
      ],
      { duration: 2000, fill: 'forwards', easing: 'ease-in-out', delay: 200 }
    );

    // Right div animation - comes from bottom (positive Y) to final position (0)
    // then continues up (negative Y) as it disappears
    const rightElement = this.rightDiv.nativeElement;
    rightElement.animate(
      [
        { offset: 0, transform: 'translateY(100px)', opacity: 0 },
        { offset: 0.5, transform: 'translateY(0)', opacity: 1 }, // Final position
        { offset: 1, transform: 'translateY(-50px)', opacity: 0.3 }
      ],
      { duration: 2000, fill: 'forwards', easing: 'ease-in-out', delay: 200 }
    );
  }

  private resetAnimations(): void {
    this.hasAnimated = false;

    // Reset all elements to initial state
    const textElement = this.textContent.nativeElement;
    const leftElement = this.leftDiv.nativeElement;
    const rightElement = this.rightDiv.nativeElement;

    textElement.style.opacity = '0';
    textElement.style.transform = 'translateY(20px)';

    leftElement.style.opacity = '0';
    leftElement.style.transform = 'translateY(-100px)';

    rightElement.style.opacity = '0';
    rightElement.style.transform = 'translateY(100px)';
  }
}
