import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Service } from '../../../models/service.model';
import { getServiceBySlug } from '../../../data/services.data';
import { ServiceNavigationDropdownComponent } from '../../shared/service-navigation-dropdown/service-navigation-dropdown';

@Component({
  selector: 'app-service-detail-page',
  standalone: true,
  imports: [CommonModule, ServiceNavigationDropdownComponent],
  templateUrl: './service-detail-page.html',
  styleUrl: './service-detail-page.css'
})
export class ServiceDetailPage implements OnInit {
  service: Service | undefined;
  category: string = '';
  serviceSlug: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.category = params['category'];
      this.serviceSlug = params['serviceSlug'];
      this.service = getServiceBySlug(this.category, this.serviceSlug);
    });
  }
}
