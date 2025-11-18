import { Component } from '@angular/core';
import {Banner} from './banner/banner';
import {AboutUs} from './about-us/about-us';

@Component({
  selector: 'app-home-page',
  imports: [
    Banner,
    AboutUs
  ],
  standalone:true,
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {

}
