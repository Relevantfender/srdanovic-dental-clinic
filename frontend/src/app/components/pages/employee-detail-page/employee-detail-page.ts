import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../../../models/employee.model';
import { getEmployeeBySlug, getAllEmployees } from '../../../data/employees.data';
import { ServiceCarouselComponent, ServiceItem } from '../../shared/service-carousel/service-carousel';

@Component({
  selector: 'app-employee-detail-page',
  standalone: true,
  imports: [CommonModule, ServiceCarouselComponent],
  templateUrl: './employee-detail-page.html',
  styleUrl: './employee-detail-page.css'
})
export class EmployeeDetailPage implements OnInit {
  @ViewChild('employeeContent', { read: ElementRef }) employeeContent?: ElementRef;

  employee: Employee | undefined;
  employeeSlug: string = '';

  // Convert employees to ServiceItem format for carousel
  employeeItems: ServiceItem[] = getAllEmployees().map(emp => ({
    name: emp.name,
    image: emp.image,
    routerLink: emp.routerLink
  }));

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.employeeSlug = params['employeeSlug'];
      this.employee = getEmployeeBySlug(this.employeeSlug);
      console.log('Loaded employee:', this.employee?.name);
    });
  }

  onEmployeeSelected(item: ServiceItem): void {
    console.log('Employee selected:', item.name, 'Route:', item.routerLink);

    // Navigate to the selected employee
    this.router.navigateByUrl(item.routerLink).then(() => {
      // Scroll to content after route change
      setTimeout(() => {
        if (this.employeeContent) {
          this.employeeContent.nativeElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    });
  }
}
