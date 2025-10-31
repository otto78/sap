import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Services } from './pages/services/services';
import { Faq } from './pages/faq/faq';
import { Contact } from './pages/contact/contact';
import { Privacy } from './pages/privacy/privacy';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'chi-sono', component: About },
  { path: 'faq', component: Faq },
  { path: 'contatti', component: Contact },
  { path: 'servizi/bambini', component: Services },
  { path: 'servizi/adolescenti', component: Services },
  { path: 'servizi/adulti', component: Services },
  { path: 'servizi/terzaEta', component: Services },
  { path: 'privacy', component: Privacy },

  // catch-all (404)
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
