import { Routes } from '@angular/router';
import {HomePage} from './components/pages/home-page/home-page';
import {AestheticMedicinePage} from './components/pages/aesthetic-medicine-page/aesthetic-medicine-page';
import {DentistryPage} from './components/pages/dentistry-page/dentistry-page';
import {GalleryPage} from './components/pages/gallery-page/gallery-page';
import {PricingPage} from './components/pages/pricing-page/pricing-page';
import {ServiceDetailPage} from './components/pages/service-detail-page/service-detail-page';
import {AboutUsPage} from './components/pages/about-us-page/about-us-page';

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
    path: 'aesthetic-medicine/:service',
    component: AestheticMedicinePage
  },
  {
    path: 'dentistry',
    component: DentistryPage
  },
  {
    path: 'dentistry/:service',
    component: DentistryPage
  },
  {
    path: 'gallery',
    component: GalleryPage
  },
  {
    path: 'pricing',
    component: PricingPage
  },
  {
    path: 'about-us',
    component: AboutUsPage
  },
  {
    path: 'services/:category/:serviceSlug',
    component: ServiceDetailPage
  }
];

