import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

interface SocialLink {
  icon: string;
  url: string;
  label: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink],
})
export class Footer {
  currentYear = new Date().getFullYear();

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
}