import { Component } from '@angular/core';
import {Banner} from './banner/banner';
import { ScrollIntroComponent } from './scroll-intro/scroll-intro';
import { AboutExcerptComponent } from './about-excerpt/about-excerpt';
import { ServicesComponent } from './services/services';
import { TeamCarousel } from './team-carousel/team-carousel';
import { ContentBlocksComponent } from './content-blocks/content-blocks';
import { InfoSectionComponent } from './info-section/info-section';
import {TeamCarousel} from './team-carousel/team-carousel';

@Component({
  selector: 'app-home-page',
  imports: [
    Banner,
    ScrollIntroComponent,
    AboutExcerptComponent,
    ServicesComponent,
    TeamCarousel,
    ContentBlocksComponent,
    InfoSectionComponent,
    TeamCarousel
  ],
  standalone:true,
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {

}
