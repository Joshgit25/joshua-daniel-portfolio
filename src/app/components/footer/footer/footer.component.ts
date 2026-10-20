import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface ContactItem {
  label: string;
  detail: string;
  icon: string;
  color: string; // dot + icon accent
  link: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  readonly items: ContactItem[] = [
    {
      label: 'Phone',
      detail: '+91 9789405333',
      icon: 'fa-solid fa-phone',
      color: '#22c55e',
      link: 'tel:+919789405333',
    },
    {
      label: 'Gmail',
      detail: 'joshuadaniel.dev@gmail.com',
      icon: 'fa-solid fa-envelope',
      color: '#ef4444',
      link: 'mailto:joshuadaniel.dev@gmail.com',
    },
    {
      label: 'LinkedIn',
      detail: 'joshuadanieldev',
      icon: 'fa-brands fa-linkedin-in',
      color: '#3b82f6',
      link: 'https://www.linkedin.com/in/joshuadanieldev/',
    },
    {
      label: 'GitHub',
      detail: 'Joshgit25',
      icon: 'fa-brands fa-github',
      color: '#a78bfa',
      link: 'https://github.com/Joshgit25?tab=repositories',
    },
    {
      label: 'Instagram',
      detail: '@_iam_joshh__',
      icon: 'fa-brands fa-instagram',
      color: '#ec4899',
      link: 'https://www.instagram.com/_iam_joshh__/',
    },
  ];

  // Duplicated once so translateX(-50%) loops seamlessly
  readonly loopItems: ContactItem[] = [...this.items, ...this.items];
}