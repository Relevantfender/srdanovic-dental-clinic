import { Routes } from '@angular/router';
import {HomePage} from './components/pages/home-page/home-page';
import {AestheticMedicinePage} from './components/pages/aesthetic-medicine-page/aesthetic-medicine-page';
import {DentistryPage} from './components/pages/dentistry-page/dentistry-page';
import {ServiceDetailPage} from './components/pages/service-detail-page/service-detail-page';
import {EmployeeDetailPage} from './components/pages/employee-detail-page/employee-detail-page';

export const routes: Routes = [
  {
    path:'',
    component: HomePage
  },
  {
    path: 'aesthetic-medicine',
    component: AestheticMedicinePage
  },
  {
    path: 'dentistry',
    component: DentistryPage
  },
  {
    path: 'services/:category/:serviceSlug',
    component: ServiceDetailPage
  },
  {
    path: 'employee/:employeeSlug',
    component: EmployeeDetailPage
  }
];

