import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { Employee } from '../../../models/employee.model';
import { getAllEmployees } from '../../../data/employees.data';

@Component({
  selector: 'app-about-us-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about-us-page.html',
  styleUrl: './about-us-page.css'
})
export class AboutUsPage implements OnInit, AfterViewInit {
  @ViewChild('aboutSection') aboutSection!: ElementRef<HTMLElement>;
  @ViewChild('textContent') textContent!: ElementRef<HTMLElement>;
  @ViewChild('imageLarge') imageLarge!: ElementRef<HTMLElement>;
  @ViewChild('imageSmall') imageSmall!: ElementRef<HTMLElement>;
  @ViewChild('employeesSection') employeesSection!: ElementRef<HTMLElement>;

  currentIndex: number = 0;
  isExpanded: boolean = false;

  employees: Employee[] = getAllEmployees();

  constructor(
    private route: ActivatedRoute,
    private viewportScroller: ViewportScroller
  ) {}

  ngOnInit() {
    // Handle fragment navigation (e.g., #employees)
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        setTimeout(() => {
          this.viewportScroller.scrollToAnchor(fragment);
        }, 100);
      }
    });
  }

  ngAfterViewInit(): void {
    this.setupScrollAnimations();
  }

  private setupScrollAnimations(): void {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.target === this.aboutSection.nativeElement) {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            this.triggerAboutAnimations();
          } else if (!entry.isIntersecting) {
            this.reverseAboutAnimations();
          }
        } else if (entry.target === this.employeesSection.nativeElement) {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            this.triggerEmployeesAnimation();
          } else if (!entry.isIntersecting) {
            this.reverseEmployeesAnimation();
          }
        }
      });
    }, options);

    if (this.aboutSection) {
      observer.observe(this.aboutSection.nativeElement);
    }
    if (this.employeesSection) {
      observer.observe(this.employeesSection.nativeElement);
    }
  }

  private triggerAboutAnimations(): void {
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

  private reverseAboutAnimations(): void {
    // Text animation - fade out
    const textElement = this.textContent.nativeElement;
    textElement.animate(
      [
        { offset: 0, opacity: 1, transform: 'translateY(0)' },
        { offset: 1, opacity: 0, transform: 'translateY(20px)' }
      ],
      { duration: 900, fill: 'forwards', easing: 'ease-in' }
    );

    // Left image (image-large) - reverses back to top
    const leftElement = this.imageLarge.nativeElement;
    leftElement.animate(
      [
        { offset: 0, transform: 'translateY(30px)', opacity: 0.8 },
        { offset: 1, transform: 'translateY(-150px)', opacity: 0 }
      ],
      { duration: 2000, fill: 'forwards', easing: 'ease-in-out' }
    );

    // Right image (image-small) - reverses back to bottom
    const rightElement = this.imageSmall.nativeElement;
    rightElement.animate(
      [
        { offset: 0, transform: 'translateY(-30px)', opacity: 0.8 },
        { offset: 1, transform: 'translateY(150px)', opacity: 0 }
      ],
      { duration: 2000, fill: 'forwards', easing: 'ease-in-out' }
    );
  }

  private triggerEmployeesAnimation(): void {
    const employeesElement = this.employeesSection.nativeElement;
    employeesElement.animate(
      [
        { offset: 0, opacity: 0, transform: 'translateY(50px)' },
        { offset: 1, opacity: 1, transform: 'translateY(0)' }
      ],
      { duration: 1200, fill: 'forwards', easing: 'ease-out' }
    );
  }

  private reverseEmployeesAnimation(): void {
    const employeesElement = this.employeesSection.nativeElement;
    employeesElement.animate(
      [
        { offset: 0, opacity: 1, transform: 'translateY(0)' },
        { offset: 1, opacity: 0, transform: 'translateY(50px)' }
      ],
      { duration: 1200, fill: 'forwards', easing: 'ease-in' }
    );
  }

  selectEmployee(index: number): void {
    this.currentIndex = index;
    this.isExpanded = false; // Reset expansion when changing employee
  }

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.employees.length;
    this.isExpanded = false; // Reset expansion when changing employee
  }

  previous(): void {
    this.currentIndex = this.currentIndex === 0
      ? this.employees.length - 1
      : this.currentIndex - 1;
    this.isExpanded = false; // Reset expansion when changing employee
  }

  toggleDescription(): void {
    this.isExpanded = !this.isExpanded;
  }

  get currentMember(): Employee {
    return this.employees[this.currentIndex];
  }
}
