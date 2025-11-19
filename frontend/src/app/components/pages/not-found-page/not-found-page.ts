import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-not-found-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './not-found-page.html',
  styleUrl: './not-found-page.css'
})
export class NotFoundPage implements AfterViewInit {
  @ViewChild('notFoundContent') notFoundContent!: ElementRef<HTMLElement>;
  @ViewChild('errorCode') errorCode!: ElementRef<HTMLElement>;
  @ViewChild('errorMessage') errorMessage!: ElementRef<HTMLElement>;
  @ViewChild('errorDescription') errorDescription!: ElementRef<HTMLElement>;
  @ViewChild('homeButton') homeButton!: ElementRef<HTMLElement>;

  ngAfterViewInit(): void {
    this.setupAnimations();
  }

  private setupAnimations(): void {
    setTimeout(() => {
      // Animate error code
      if (this.errorCode) {
        this.errorCode.nativeElement.animate(
          [
            { opacity: 0, transform: 'scale(0.5) rotate(-10deg)' },
            { opacity: 1, transform: 'scale(1) rotate(0deg)' }
          ],
          { duration: 800, fill: 'forwards', easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)' }
        );
      }

      // Animate error message
      if (this.errorMessage) {
        this.errorMessage.nativeElement.animate(
          [
            { opacity: 0, transform: 'translateY(30px)' },
            { opacity: 1, transform: 'translateY(0)' }
          ],
          { duration: 600, fill: 'forwards', easing: 'ease-out', delay: 200 }
        );
      }

      // Animate error description
      if (this.errorDescription) {
        this.errorDescription.nativeElement.animate(
          [
            { opacity: 0, transform: 'translateY(30px)' },
            { opacity: 1, transform: 'translateY(0)' }
          ],
          { duration: 600, fill: 'forwards', easing: 'ease-out', delay: 400 }
        );
      }

      // Animate home button
      if (this.homeButton) {
        this.homeButton.nativeElement.animate(
          [
            { opacity: 0, transform: 'scale(0.8)' },
            { opacity: 1, transform: 'scale(1)' }
          ],
          { duration: 500, fill: 'forwards', easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)', delay: 600 }
        );
      }
    }, 100);
  }
}
