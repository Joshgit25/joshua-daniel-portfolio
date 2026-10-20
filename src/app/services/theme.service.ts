import { Injectable, signal } from '@angular/core';

export type Theme = 'light' | 'dark';
export type Lang = 'en' | 'ta';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  theme = signal<Theme>('light');
  lang = signal<Lang>('en');

  constructor() {
    const saved = localStorage.getItem('theme') as Theme | null;
    const preferred = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    this.apply(saved ?? preferred);
    this.lang.set((localStorage.getItem('lang') as Lang) ?? 'en');
  }

  toggleTheme() {
    this.apply(this.theme() === 'light' ? 'dark' : 'light');
  }

  toggleLang() {
    const next: Lang = this.lang() === 'en' ? 'ta' : 'en';
    this.lang.set(next);
    localStorage.setItem('lang', next);
  }

  private apply(t: Theme) {
    this.theme.set(t);
    document.documentElement.setAttribute('data-theme', t);
    localStorage.setItem('theme', t);
  }
}