import { AfterViewInit, Component, computed, signal } from '@angular/core';
import AOS from 'aos';

type TabId = 'focus' | 'background' | 'interests';

interface Item {
  title: string;
  meta?: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements AfterViewInit {
  // readonly stats = [
  //   { value: '1.6', label: 'Years of experience' },
  //   { value: '5+', label: 'Projects built' },
  //   { value: '3+', label: 'Tech stacks' },
  // ];

  readonly tabs: { id: TabId; label: string }[] = [
    { id: 'focus', label: 'What I do' },
    { id: 'background', label: 'Background' },
    { id: 'interests', label: 'Interests' },
  ];

  private readonly content: Record<TabId, Item[]> = {
    focus: [
      {
        title: 'Angular development',
        meta: 'Angular 19, TypeScript, RxJS, reusable components and service-based architecture.',
      },
      {
        title: 'Frontend engineering',
        meta: 'HTML5, CSS3, Bootstrap 5 and responsive layouts.',
      },
      {
        title: 'Authentication and security',
        meta: 'HTTP interceptors, route guards, session handling and JWT.',
      },
      {
        title: 'Backend basics',
        meta: 'Node.js REST APIs, MySQL and rate limiting.',
      },
    ],
    background: [
      {
        title: 'Frontend Angular Developer',
        meta: '1.6 years of professional experience',
      },
      {
        title: 'BCOMCA, Computer Application',
        meta: 'The American College, Madurai · 2024',
      },
    ],
    interests: [
      { title: 'Carrom board' },
      { title: 'Badminton' },
      { title: 'Drawing' },
      { title: 'Learning new skills' },
    ],
  };

  readonly activeTab = signal<TabId>('focus');
  readonly items = computed(() => this.content[this.activeTab()]);

  ngAfterViewInit(): void {
    AOS.init({ duration: 700, easing: 'ease-out', once: true, offset: 80 });
  }

  selectTab(id: TabId): void {
    this.activeTab.set(id);
  }

  /** Left / Right arrow keys move between tabs (standard tab pattern). */
  onTabKey(event: KeyboardEvent, index: number): void {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
    event.preventDefault();
    const step = event.key === 'ArrowRight' ? 1 : -1;
    const next = (index + step + this.tabs.length) % this.tabs.length;
    this.selectTab(this.tabs[next].id);
    document.getElementById('about-tab-' + this.tabs[next].id)?.focus();
  }
}