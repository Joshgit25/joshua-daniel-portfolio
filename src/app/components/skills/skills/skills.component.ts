
import { Component, OnInit, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../../services/theme.service';
import AOS from 'aos';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnInit {
  ts = inject(ThemeService);
  tech = 'technologies';
  skill = 'skills';

  skills = [
    // Frontend
    { icon: 'fa-brands fa-angular', name: 'Angular', color: '#DD0031' },
    { icon: 'fa-brands fa-typescript', name: 'TypeScript', color: '#3178C6' },
    { icon: 'fa-brands fa-js', name: 'JavaScript', color: '#F7DF1E' },
    { icon: 'fa-brands fa-html5', name: 'HTML5', color: '#E34F26' },
    { icon: 'fa-brands fa-css3-alt', name: 'CSS3', color: '#1572B6' },
    { icon: 'fa-brands fa-bootstrap', name: 'Bootstrap', color: '#7952B3' },

    // Backend & Database
    { icon: 'fa-brands fa-node-js', name: 'Node.js', color: '#339933' },
    { icon: 'fa-solid fa-plug', name: 'REST API', color: '#00A8CC' },
    { icon: 'fa-solid fa-key', name: 'JWT Auth', color: '#F59E0B' },
    { icon: 'fa-solid fa-database', name: 'MySQL', color: '#4479A1' },

    // Tools
    { icon: 'fa-brands fa-git-alt', name: 'Git', color: '#F05032' },
    { icon: 'fa-brands fa-github', name: 'GitHub', color: '#E6EDF3' },
    { icon: 'fa-solid fa-paper-plane', name: 'Postman', color: '#FF6C37' },
    { icon: 'fa-brands fa-visual-studio', name: 'VS Code', color: '#007ACC' },
    { icon: 'fa-brands fa-linux', name: 'Linux', color: '#020204' },
  ];

  // Duplicated so translateX(-50%) loops seamlessly
  loopSkills = [...this.skills, ...this.skills];

  loopSkillsReverse = [
    ...[...this.skills].reverse(),
    ...[...this.skills].reverse()
  ];

  ngOnInit(): void {
    AOS.refresh();
  }

  // Mouse glow per card
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent): void {
    const cards = document.querySelectorAll('.card-inner');

    cards.forEach((card) => {
      const rect = (card as HTMLElement).getBoundingClientRect();

      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      (card as HTMLElement).style.setProperty('--mx', `${x}%`);
      (card as HTMLElement).style.setProperty('--my', `${y}%`);
    });
  }
}
