import { Component, HostListener, OnDestroy, inject, signal } from '@angular/core';
import { ThemeService } from '../../../services/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnDestroy {
  ts = inject(ThemeService);
  active = signal('home');
  menuOpen = signal(false);

  links = [
    { id: 'home', n: '01', label: 'Home' },
    { id: 'about', n: '02', label: 'About' },
    { id: 'skills', n: '03', label: 'skills' },
    { id: 'resume', n: '04', label: 'Virtual Resume' },
    { id: 'contact', n: '05', label: 'Connect', accent: true },
  ];

  toggleMenu(): void {
    this.setMenu(!this.menuOpen());
  }

  closeMenu(): void {
    this.setMenu(false);
  }

  private setMenu(open: boolean): void {
    this.menuOpen.set(open);
    document.body.style.overflow = open ? 'hidden' : ''; 
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeMenu();
  }

  @HostListener('window:resize')
  onResize(): void {
    if (window.innerWidth >= 992 && this.menuOpen()) this.closeMenu();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    for (const l of [...this.links].reverse()) {
      const el = document.getElementById(l.id);
      if (el && el.getBoundingClientRect().top <= 140) {
        this.active.set(l.id);
        return;
      }
    }
    this.active.set('home');
  }

  ngOnDestroy(): void {
    document.body.style.overflow = '';
  }
}