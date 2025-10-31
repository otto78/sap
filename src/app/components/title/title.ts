import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { Subject, takeUntil, filter } from 'rxjs';

@Component({
  selector: 'app-title',
  imports: [CommonModule],
  templateUrl: './title.html',
  styleUrl: './title.scss',
})
export class Title implements OnInit, OnDestroy {
  currentTitle: string = '';
  private destroy$ = new Subject<void>();

  private titleMap: { [key: string]: string } = {
    '/chi-sono': 'Chi Sono',
    '/servizi/bambini': 'Bambini',
    '/servizi/adolescenti': 'Adolescenti',
    '/servizi/adulti': 'Adulti',
    '/servizi/terzaEta': 'Terza età',
    '/faq': 'Domande Frequenti',
    '/contatti': 'Contattami',
    '/privacy': 'Informativa sulla privacy',
  };

  constructor(private router: Router) {}

  ngOnInit() {
    // Imposta il titolo iniziale
    this.updateTitle(this.router.url);

    // Ascolta i cambiamenti di rotta
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntil(this.destroy$)
      )
      .subscribe((event: any) => {
        this.updateTitle(event.urlAfterRedirects);
      });
  }

  private updateTitle(url: string) {
    // Rimuovi query params e fragments
    const cleanUrl = url.split('?')[0].split('#')[0];
    this.currentTitle = this.titleMap[cleanUrl] || 'Pagina';
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
