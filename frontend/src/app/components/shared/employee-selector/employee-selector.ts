import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Employee } from '../../../models/employee.model';

@Component({
  selector: 'app-employee-selector',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './employee-selector.html',
  styleUrls: ['./employee-selector.css']
})
export class EmployeeSelectorComponent {
  @Input() employees: Employee[] = [];
  @Input() currentEmployeeSlug: string = '';
  @Output() employeeSelected = new EventEmitter<Employee>();

  onEmployeeClick(employee: Employee): void {
    this.employeeSelected.emit(employee);
  }

  isCurrentEmployee(employee: Employee): boolean {
    return employee.slug === this.currentEmployeeSlug;
  }
}
