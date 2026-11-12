import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, HostListener, OnDestroy, inject } from '@angular/core';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  type: string;
  status: string;
  description?: string;
  skills: string[];
  image: string;
}

@Component({
  selector: 'app-certificate',
  imports: [CommonModule],
  templateUrl: './certificate.component.html',
  styleUrl: './certificate.component.css'
})
export class CertificateComponent implements OnDestroy {
  private document = inject(DOCUMENT);

  readonly cer = 'Certifications';
  readonly train = 'Training';

  readonly certificates: Certificate[] = [
    {
      id: 1,
      title: 'Web Development',
      issuer: 'Corizo',
      type: 'Certification',
      status: 'Completed',
      description: 'Hands-on training in building responsive websites with HTML5, CSS3 and JavaScript.',
      skills: ['HTML5', 'CSS3', 'JavaScript'],
      image: '/joshua-daniel-portfolio/corizo_certificate.jpeg'
    },
    {
      id: 2,
      title: 'Frontend Development Internship',
      issuer: 'Spiegel Technologies',
      type: 'Internship Certificate',
      status: 'Completed',
      description: 'Completed a 3-month internship gaining practical experience in HTML, CSS, JavaScript, and Angular through real-world projects.',
      skills: ['HTML', 'CSS', 'JavaScript', 'Angular'],
      image: '/joshua-daniel-portfolio/internship-certificate.png'
    }
  ];

  selected: Certificate | null = null;

  openCertificate(cert: Certificate): void {
    this.selected = cert;
    this.document.body.style.overflow = 'hidden';
  }

  @HostListener('document:keydown.escape')
  closeCertificate(): void {
    this.selected = null;
    this.document.body.style.overflow = '';
  }

  ngOnDestroy(): void {
    this.document.body.style.overflow = '';
  }
}