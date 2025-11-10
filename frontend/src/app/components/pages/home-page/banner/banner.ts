import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-banner',
  imports: [],
  standalone: true,
  templateUrl: './banner.html',
  styleUrl: './banner.css'
})
export class Banner implements AfterViewInit {
  @ViewChild('videoPlayer') videoPlayer!: ElementRef;

  ngAfterViewInit(): void {
    this.playVideo();
    // this.videoRef.nativeElement.muted = true;
    // this.videoRef.nativeElement.play().catch(() => {});
  }

  playVideo(): void {
    if (this.videoPlayer && this.videoPlayer.nativeElement) {
      this.videoPlayer.nativeElement.play()
        .then(() => {
          console.log('Video autoplay successful.');
        })
        .catch((error: any) => {
          console.error('Video autoplay failed:', error);
        });
    }
  }
}
