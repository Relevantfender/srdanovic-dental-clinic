import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../../../models/employee.model';
import { getEmployeeBySlug } from '../../../data/employees.data';

@Component({
  selector: 'app-employee-detail-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-detail-page.html',
  styleUrl: './employee-detail-page.css'
})
export class EmployeeDetailPage implements OnInit {
  employee: Employee | undefined;
  employeeSlug: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.employeeSlug = params['employeeSlug'];
      this.employee = getEmployeeBySlug(this.employeeSlug);
    });
  }
}
