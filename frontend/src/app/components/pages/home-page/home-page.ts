import { Component } from '@angular/core';
import {Banner} from './banner/banner';
import { ContentBlocksComponent } from './content-blocks/content-blocks';
import { InfoSectionComponent } from './info-section/info-section';

@Component({
  selector: 'app-home-page',
  imports: [
    Banner,
    ContentBlocksComponent,
    InfoSectionComponent
  ],
  standalone:true,
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {

}
