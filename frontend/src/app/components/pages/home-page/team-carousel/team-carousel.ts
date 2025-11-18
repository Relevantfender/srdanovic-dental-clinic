import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { Employee } from '../../../../models/employee.model';
import { getAllEmployees } from '../../../../data/employees.data';

@Component({
  selector: 'app-team-carousel',
  imports: [CommonModule, RouterModule],
  standalone: true,
  templateUrl: './team-carousel.html',
  styleUrl: './team-carousel.css',
  animations: [
    trigger('carouselSlide', [
      transition('* => *', [
        style({ transform: '{{slideFrom}}', opacity: 0 }),
        animate('500ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ], { params: { slideFrom: 'translateX(100%)' } })
    ])
  ]
})
export class TeamCarousel {
  currentIndex: number = 0;
  animationCounter: number = 0;
  slideDirection: string = 'translateX(100%)';

  employees: Employee[] = getAllEmployees();

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
