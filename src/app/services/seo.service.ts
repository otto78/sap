// src/app/services/seo.service.ts
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

export interface SeoData {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  constructor(
    private title: Title,           // servizio Angular reale
    private meta: Meta,             // servizio Angular reale
    @Inject(DOCUMENT) private doc: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  update(data: SeoData): void {
    if (data.title) {
      this.title.setTitle(data.title);
      this.updateTag('og:title', data.title);
      this.updateTag('twitter:title', data.title);
    }

    this.updateTag('description', data.description);
    this.updateTag('keywords', data.keywords);

    this.updateTag('og:description', data.description);
    this.updateTag('og:image', data.image);
    this.updateTag('og:type', 'website');
    this.updateTag('twitter:card', data.image ? 'summary_large_image' : 'summary');
    this.updateTag('twitter:description', data.description);
    this.updateTag('twitter:image', data.image);

    if (data.url) {
      this.updateTag('og:url', data.url);
      if (isPlatformBrowser(this.platformId)) {
        this.setCanonical(data.url);
      }
    }
  }

private updateTag(nameOrProp: string, content?: string) {
  if (!content) return;

  const tag: { name?: string; property?: string; content: string } = { content };

  if (nameOrProp.startsWith('og:') || nameOrProp.startsWith('twitter:')) {
    tag.property = nameOrProp;
  } else {
    tag.name = nameOrProp;
  }

  this.meta.updateTag(tag as any); // cast esplicito per MetaDefinition
}


  private setCanonical(url: string) {
    let link: HTMLLinkElement | null = this.doc.querySelector("link[rel='canonical']");
    if (!link) {
      link = this.doc.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.doc.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }
}
