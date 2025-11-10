import {AfterViewInit, Component, EventEmitter, Output} from '@angular/core';

interface ImageElement{
  image:string,
  color:string,
}

@Component({
  selector: 'app-intro',
  standalone:true,
  imports: [],
  templateUrl: './intro.html',
  styleUrl: './intro.css'
})

export class Intro implements AfterViewInit{
  @Output() finished = new EventEmitter<void>();

  elements: ImageElement[] = [
    {image:"/images/intro/image-1.png", color:"#FF5733"},
    {image:"/images/intro/image-2.png", color:"#33FF57"},
    {image:"/images/intro/image-3.png", color:"#5733FF"},
    {image:"/images/intro/image-4.png", color:"#FFD700"},
    {image:"/images/intro/image-5.png", color:"#8A2BE2"},
    {image:"/images/intro/image-6.png", color:"#00FFFF"},
  ]
  async ngAfterViewInit(): Promise<void> {
    let lastAnim: Animation;

    const containers = document.querySelectorAll<HTMLElement>(".container"); // <-- specify HTMLElement

    containers.forEach((container, idx) => {
      lastAnim = container.animate(
        [
          { offset: 0, transform: "scale(2)", opacity: 0 },
          { offset: 0.5, transform: "scale(1.5)", opacity: 0.5 },
          { offset: 1, transform: "scale(1)", opacity: 0.8 },
        ],
        { duration: 900, fill: "forwards", delay: idx * 200 }
      );

    });

    await lastAnim!.finished;

    const cover = document.querySelector<HTMLElement>(".cover");
    if (!cover) return;

    let coverAnim : Animation;
    coverAnim = cover.animate(
      [
        { offset: 0, opacity: 0 },
        { offset: 1, opacity: 0.5 },
      ],
      { duration: 1000, fill: "forwards"}
    );
    await coverAnim.finished;

    setTimeout(()=>{
      this.finished.emit();
    }, 200)


  }
}

