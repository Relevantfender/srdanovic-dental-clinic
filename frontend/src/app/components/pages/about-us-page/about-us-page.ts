import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import { Employee } from '../../../models/employee.model';
import { getAllEmployees } from '../../../data/employees.data';

@Component({
  selector: 'app-about-us-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about-us-page.html',
  styleUrl: './about-us-page.css',
  animations: [
    trigger('carouselSlide', [
      transition('* => *', [
        style({ transform: '{{slideFrom}}', opacity: 0 }),
        animate('500ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ], { params: { slideFrom: 'translateX(100%)' } })
    ])
  ]
})
export class AboutUsPage implements OnInit {
  currentIndex: number = 0;
  animationCounter: number = 0;
  slideDirection: string = 'translateX(100%)';

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

  next(): void {
    this.slideDirection = 'translateX(100%)';
    this.currentIndex = (this.currentIndex + 1) % this.employees.length;
    this.animationCounter++;
  }

  previous(): void {
    this.slideDirection = 'translateX(-100%)';
    this.currentIndex = this.currentIndex === 0
      ? this.employees.length - 1
      : this.currentIndex - 1;
    this.animationCounter++;
  }

  get currentMember(): Employee {
    return this.employees[this.currentIndex];
  }
}
