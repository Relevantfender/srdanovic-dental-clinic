import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../../../models/employee.model';
import { getEmployeeBySlug, getAllEmployees } from '../../../data/employees.data';
import { EmployeeSelectorComponent } from '../../shared/employee-selector/employee-selector';

@Component({
  selector: 'app-employee-detail-page',
  standalone: true,
  imports: [CommonModule, EmployeeSelectorComponent],
  templateUrl: './employee-detail-page.html',
  styleUrl: './employee-detail-page.css'
})
export class EmployeeDetailPage implements OnInit {
  @ViewChild('employeeContent', { read: ElementRef }) employeeContent?: ElementRef;

  employee: Employee | undefined;
  employeeSlug: string = '';
  allEmployees: Employee[] = getAllEmployees();

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.employeeSlug = params['employeeSlug'];
      this.employee = getEmployeeBySlug(this.employeeSlug);
    });
  }

  onEmployeeSelected(employee: Employee): void {
    // Scroll to content after route change
    setTimeout(() => {
      if (this.employeeContent) {
        this.employeeContent.nativeElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  }
}
