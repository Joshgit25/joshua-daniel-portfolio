import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import AOS from 'aos';

type Section = 'overview' | 'skills' | 'projects' | 'education';

@Component({
  selector: 'app-virtual-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './virtual-resume.component.html',
  styleUrl: './virtual-resume.component.css',
})
export class VirtualResumeComponent implements AfterViewInit {
  firstName = 'virtual';
  secondName = 'resume';

  readonly sections: Section[] = ['overview', 'skills', 'projects', 'education'];
  contents: Section = 'overview';

  showResume = false;
  previewResume = '/resume-img.jpeg';
  resumePdf = '/Joshua_Daniel_Angular19.pdf';

  stacks = [
    { id: 1, name: 'Frontend', tech: 'HTML5, CSS3, JavaScript, TypeScript, Angular 19, Bootstrap 5' },
    { id: 2, name: 'Angular Concepts', tech: 'Reusable Components, Data Binding, Service-Based Architecture, RxJS, HTTP Interceptors, AuthGuard, AuthService, SessionService' },
    { id: 3, name: 'Backend & APIs', tech: 'Node.js, RESTful API Integration, JWT Authentication, Rate Limiting (express-rate-limit)' },
    { id: 4, name: 'Database', tech: 'MySQL' },
    { id: 5, name: 'Tools & Workflow', tech: 'Git, GitHub, Postman, VS Code' },
    { id: 6, name: 'Environment', tech: 'Linux (Ubuntu, Xubuntu), Basic Linux Commands' },
  ];
  
  experience = [
    {
      role: 'Angular Developer & Node.js Developer',
      company: 'Spiegel Technologies, Madurai',
      period: 'Feb 2025 – Jul 2026',
      points: [
        'Developed a P2P web application using Angular 19 with data binding, reusable components and service-based architecture',
        'Built full-stack Admin and User Panels using Angular 19, Node.js and MySQL',
        'Implemented authentication flows using HTTP Interceptors, AuthGuard, AuthService and SessionService',
        'Added API rate limiting with express-rate-limit to protect backend endpoints',
        'Created responsive interfaces with HTML5, CSS3, Bootstrap 5 and TypeScript; tested APIs with Postman',
      ],
    },
    {
      role: 'Front-End Developer Intern',
      company: 'Techpila Technologies, Madurai',
      period: 'Nov 2024 – Jan 2025',
      points: [
        'Worked with HTML, CSS and JavaScript through structured front-end tasks',
        'Built a Login Page, Registration Form and W3Schools-inspired UI',
      ],
    },
  ];

  ngAfterViewInit(): void {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100
    });

    AOS.refresh();
  }

  ngOnDestroy(): void {
    AOS.refreshHard();
  }

  selectSection(key: string): void {
    this.contents = this.sections.includes(key as Section) ? (key as Section) : 'overview';
  }

  viewResume(): void { this.showResume = true; }
  closeResume(): void { this.showResume = false; }
}