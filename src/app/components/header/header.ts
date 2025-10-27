import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
  standalone: true,
  imports: [RouterLink, RouterLinkActive,],
})
export class Header {
  // Signals per stato reattivo
  isMenuCollapsed = signal(true);
  isScrolled = signal(false);

  menuItems = signal([
    { label: 'Home', route: '/', active: true },
    { label: 'Di cosa mi occupo', route: '/services', active: false },
    { label: 'Chi Sono', route: '/about', active: false },
    { label: 'Faq', route: '/faq', active: false },
    { label: 'Contatti', route: '/contact', active: false },
  ]);

  socialLinks = signal([
    { icon: 'bi-facebook', url: 'https://facebook.com', label: 'Facebook' },
    { icon: 'bi-instagram', url: 'https://instagram.com', label: 'Instagram' },
    { icon: 'bi-linkedin', url: 'https://linkedin.com', label: 'LinkedIn' },
  ]);

  constructor() {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled.set(window.pageYOffset > 50);
    console.log('Scroll position:', window.pageYOffset);
  }

  toggleMenu() {
    this.isMenuCollapsed.set(!this.isMenuCollapsed());
  }

  setActiveMenu(index: any) {
    this.menuItems.update(items =>
      items.map((item, i) => ({ ...item, active: i === index }))
    );
    this.isMenuCollapsed.set(true);
  }

  openSocialLink(url: string) {
    window.open(url, '_blank');
  }
}
