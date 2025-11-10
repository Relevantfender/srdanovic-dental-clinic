import { Component } from '@angular/core';
import {Banner} from './banner/banner';

@Component({
  selector: 'app-home-page',
  imports: [
    Banner
  ],
  standalone:true,
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {

}
