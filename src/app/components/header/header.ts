// header.component.ts
import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

interface MenuItem {
  label: string;
  route: string;
  children?: MenuItem[];
  showDropdown?: boolean;
  forceHide?: boolean; // 🎯 Nuova proprietà per forzare la chiusura
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
      route: '/servizi',
      children: [
        { label: 'Bambini', route: '/servizi/bambini' },
        { label: 'Adolescenti', route: '/servizi/adolescenti' },
        { label: 'Adulti', route: '/servizi/adulti' },
        { label: 'Terza età', route: '/servizi/terzaEta' },
      ],
      showDropdown: false,
      forceHide: false, // 🎯 Inizializzato
    },
    { label: 'Su di me', route: '/chi-sono' },
    { label: 'Domande frequenti', route: '/faq' },
    { label: 'Contatti', route: '/contatti' },
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
    if (!item.forceHide) {
      item.showDropdown = true;
    }
  }

  hideDropdown(item: MenuItem) {
    item.showDropdown = false;
  }

  // 🎯 Chiamato quando si clicca su un link del dropdown
  onDropdownItemClick(parentItem: MenuItem, childRoute: string) {
    // Forza la chiusura del dropdown
    parentItem.forceHide = true;
    parentItem.showDropdown = false;
    
    // Dopo 500ms riabilita il dropdown
    setTimeout(() => {
      parentItem.forceHide = false;
    }, 500);
    
    this.setActiveMenu(childRoute);
  }
}