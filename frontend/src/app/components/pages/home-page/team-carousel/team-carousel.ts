import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, state, keyframes } from '@angular/animations';

interface TeamMember {
  name: string;
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-team-carousel',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './team-carousel.html',
  styleUrl: './team-carousel.css',
  animations: [
    trigger('slideLeft', [
      transition('void => *', [])
    ]),
    trigger('slideRight', [
      transition('void => *', [])
    ]),
    trigger('cardSlide', [
      state('slideLeft', style({ transform: 'translateX(0)', opacity: 1 })),
      state('slideRight', style({ transform: 'translateX(0)', opacity: 1 })),
      transition('* => slideLeft', [
        style({ transform: 'translateX(-100px)', opacity: 0 }),
        animate('500ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ]),
      transition('* => slideRight', [
        style({ transform: 'translateX(100px)', opacity: 0 }),
        animate('500ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ])
    ])
  ]
})
export class TeamCarousel {
  currentIndex: number = 0;
  animationState: string = 'slideRight';

  teamMembers: TeamMember[] = [
    {
      name: 'Dr. John Smith',
      title: 'Chief Dental Surgeon',
      description: 'With over 15 years of experience in advanced dental procedures, Dr. Smith specializes in cosmetic dentistry and smile transformations.',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      name: 'Dr. Sarah Johnson',
      title: 'Orthodontist',
      description: 'Dr. Johnson is an expert in orthodontics with a passion for creating beautiful, healthy smiles through innovative treatment methods.',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      name: 'Dr. Michael Chen',
      title: 'Pediatric Dentist',
      description: 'Specializing in pediatric dentistry, Dr. Chen creates a comfortable environment for children and provides gentle, comprehensive dental care.',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      name: 'Dr. Emily Rodriguez',
      title: 'Periodontist',
      description: 'Dr. Rodriguez focuses on gum health and periodontal treatments, helping patients maintain optimal oral health for life.',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ];

  next(): void {
    this.animationState = 'slideRight';
    setTimeout(() => {
      this.currentIndex = (this.currentIndex + 1) % this.teamMembers.length;
    }, 0);
  }

  previous(): void {
    this.animationState = 'slideLeft';
    setTimeout(() => {
      this.currentIndex = this.currentIndex === 0
        ? this.teamMembers.length - 1
        : this.currentIndex - 1;
    }, 0);
  }

  onAnimationDone(): void {
    // Animation completed
  }

  get currentMember(): TeamMember {
    return this.teamMembers[this.currentIndex];
  }
}
