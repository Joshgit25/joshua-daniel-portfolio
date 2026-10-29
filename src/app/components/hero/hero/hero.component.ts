import { Component, HostListener, inject, OnInit, AfterViewInit } from '@angular/core';
import { ThemeService } from '../../../services/theme.service';
import { NavbarComponent } from '../../navbar/navbar/navbar.component';
import { AboutComponent } from '../../about/about/about.component';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from '../../skills/skills/skills.component';
import { EducationComponent } from '../../education/education/education.component';
import { VirtualResumeComponent } from '../../virtual-resume/virtual-resume/virtual-resume.component';
import AOS from 'aos';
import { ContactComponent } from '../../contact/contact/contact.component';
import { FooterComponent } from '../../footer/footer/footer.component';
import { CertificateComponent } from '../../certificate/certificate/certificate.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NavbarComponent, AboutComponent, CommonModule, SkillsComponent, EducationComponent, VirtualResumeComponent, ContactComponent, FooterComponent, CertificateComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent implements AfterViewInit {
  showScrollTop = false;
  ts = inject(ThemeService);
  name = { en: 'B. Joshua Daniel', ta: 'ப யோசுவா டேனியல்' };

  // Mouse glow
  glowX = 0;
  glowY = 0;

  ngAfterViewInit(): void {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 60,
    });
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(e: MouseEvent): void {
    const glow = document.querySelector('.cursor-glow') as HTMLElement;
    if (glow) {
      glow.style.left = e.clientX + 'px';
      glow.style.top  = e.clientY + 'px';
    }
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.showScrollTop = window.scrollY > 300;
  }
}