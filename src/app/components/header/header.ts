import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

interface MenuItem {
  label: string;
  route: string;
  children?: MenuItem[];
  showDropdown?: boolean; // 👈 serve per il comportamento hover
}

interface SocialLink {
  icon: string;
  url: string;
  label: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
})
export class Header {
  isMenuCollapsed = signal(true);
  isScrolled = signal(false);

  menuItems = signal<MenuItem[]>([
    { label: 'Home', route: '/' },
    {
      label: 'Di cosa mi occupo',
      route: '/services',
      children: [
        { label: 'Bambini', route: '/services/bambini' },
        { label: 'Adolescenti', route: '/services/adolescenti' },
        { label: 'Adulti', route: '/services/adulti' },
        { label: 'Anziani', route: '/services/anziani' },
      ],
      showDropdown: false, // 👈 inizializzato
    },
    { label: 'Su di me', route: '/about' },
    { label: 'Faq', route: '/faq' },
    { label: 'Contatti', route: '/contact' },
  ]);

  socialLinks = signal<SocialLink[]>([
    {
      icon: 'bi-linkedin',
      url: 'https://it.linkedin.com/in/sefora-antonello-1587b6153',
      label: 'LinkedIn',
    },
    {
      icon: 'bi-whatsapp',
      url: 'https://wa.me/393469730190',
      label: 'Whatsapp',
    },
    {
      icon: 'bi-envelope',
      url: 'mailto:antonellosefora@gmail.com',
      label: 'Gmail',
    },
  ]);

  constructor() {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled.set(window.pageYOffset > 50);
  }

  toggleMenu() {
    this.isMenuCollapsed.set(!this.isMenuCollapsed());
  }

  setActiveMenu(route: string) {
    this.isMenuCollapsed.set(true);
  }

  openSocialLink(url: string) {
    window.open(url, '_blank');
  }

  showDropdown(item: MenuItem) {
    item.showDropdown = true;
  }

  hideDropdown(item: MenuItem) {
    item.showDropdown = false;
  }
}
