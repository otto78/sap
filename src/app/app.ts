import { Component, inject, OnInit, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { TopHeader } from "./components/top-header/top-header";
import { filter } from 'rxjs';
import { SEO_DATA } from './seo';
import { SeoService } from './services/seo.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, TopHeader, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  private router = inject(Router);
  private seo = inject(SeoService);

  ngOnInit(): void {
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((event) => {
        const path = event.urlAfterRedirects.replace(/^\//, ''); // es. "chi-sono"
        const data = SEO_DATA[path] || SEO_DATA['**'] || SEO_DATA[''];
        this.seo.update(data);
      });
  }
}