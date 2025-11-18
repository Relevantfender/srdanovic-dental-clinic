import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about-excerpt',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './about-excerpt.html',
  styleUrl: './about-excerpt.css'
})
export class AboutExcerptComponent implements AfterViewInit {
  @ViewChild('aboutSection') aboutSection!: ElementRef<HTMLElement>;
  @ViewChild('textContent') textContent!: ElementRef<HTMLElement>;
  @ViewChild('imageLarge') imageLarge!: ElementRef<HTMLElement>;
  @ViewChild('imageSmall') imageSmall!: ElementRef<HTMLElement>;

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
          this.triggerAnimations();
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
      { duration: 900, fill: 'forwards', easing: 'ease-out' }
    );

    // Left image (image-large) - comes from top to final position, then continues down
    const leftElement = this.imageLarge.nativeElement;
    leftElement.animate(
      [
        { offset: 0, transform: 'translateY(-150px)', opacity: 0 },
        { offset: 0.5, transform: 'translateY(0)', opacity: 1 }, // Final position
        { offset: 1, transform: 'translateY(30px)', opacity: 0.8 }
      ],
      { duration: 2000, fill: 'forwards', easing: 'ease-in-out', delay: 200 }
    );

    // Right image (image-small) - comes from bottom to final position, then continues up
    const rightElement = this.imageSmall.nativeElement;
    rightElement.animate(
      [
        { offset: 0, transform: 'translateY(150px)', opacity: 0 },
        { offset: 0.5, transform: 'translateY(0)', opacity: 1 }, // Final position
        { offset: 1, transform: 'translateY(-30px)', opacity: 0.8 }
      ],
      { duration: 2000, fill: 'forwards', easing: 'ease-in-out', delay: 200 }
    );
  }
}
