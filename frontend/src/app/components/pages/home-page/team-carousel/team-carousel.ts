import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  styleUrl: './team-carousel.css'
})
export class TeamCarousel {
  currentIndex: number = 0;

  teamMembers: TeamMember[] = [
    {
      name: 'Dr. John Smith',
      title: 'Chief Dental Surgeon',
      description: 'With over 15 years of experience in advanced dental procedures, Dr. Smith specializes in cosmetic dentistry and smile transformations.',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=500&fit=crop&q=80'
    },
    {
      name: 'Dr. Sarah Johnson',
      title: 'Orthodontist',
      description: 'Dr. Johnson is an expert in orthodontics with a passion for creating beautiful, healthy smiles through innovative treatment methods.',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=500&fit=crop&q=80'
    },
    {
      name: 'Dr. Michael Chen',
      title: 'Pediatric Dentist',
      description: 'Specializing in pediatric dentistry, Dr. Chen creates a comfortable environment for children and provides gentle, comprehensive dental care.',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=500&fit=crop&q=80'
    },
    {
      name: 'Dr. Emily Rodriguez',
      title: 'Periodontist',
      description: 'Dr. Rodriguez focuses on gum health and periodontal treatments, helping patients maintain optimal oral health for life.',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=500&fit=crop&q=80'
    }
  ];

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.teamMembers.length;
  }

  previous(): void {
    this.currentIndex = this.currentIndex === 0
      ? this.teamMembers.length - 1
      : this.currentIndex - 1;
  }

  get currentMember(): TeamMember {
    return this.teamMembers[this.currentIndex];
  }
}
