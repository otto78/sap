import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Services } from './pages/services/services';
import { Faq } from './pages/faq/faq';
import { Contact } from './pages/contact/contact';
import { Privacy } from './pages/privacy/privacy';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'faq', component: Faq },
  { path: 'contact', component: Contact },
  { path: 'services/bambini', component: Services },
  { path: 'services/adolescenti', component: Services },
  { path: 'services/adulti', component: Services },
  { path: 'services/terzaEta', component: Services },
  { path: 'privacy', component: Privacy },

  // catch-all (404)
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
