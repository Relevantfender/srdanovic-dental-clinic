import { Component, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Intro } from './components/shared/intro/intro';
import { HeaderComponent } from './components/shared/header-component/header-component';
import { FooterComponent } from './components/shared/footer-component/footer-component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Intro, HeaderComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  private hasSeenIntro = signal(sessionStorage.getItem('intro-seen') === 'true');
  showIntro = signal(false);
  fadeOutIntro = false

  constructor() {
    effect(() => {
      this.showIntro.set(!this.hasSeenIntro())
    })

    // window.showIntro.set(!this.hasSeenIntro());
  }
  hideIntro() {
    this.fadeOutIntro = true;
    setTimeout(() => {
      this.showIntro.set(false);
      sessionStorage.setItem('intro-seen', 'true');
      this.hasSeenIntro.set(true);
    }, 500);

    const introElement = document.querySelector('app-intro');
    if (introElement) {
      introElement.classList.add('fade-out');
    }
  }

}
