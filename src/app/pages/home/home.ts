import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Service {
  title: string;
  route: string;
  image: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home {
  services: Service[] = [
    {
      title: 'Bambini',
      route: '/servizi/bambini',
      image: 'images/ansia.jpg'
    },
    {
      title: 'Adolescenti',
      route: '/servizi/adolescenti',
      image: 'images/autostima2.jpg'
    },
    {
      title: 'Adulti',
      route: '/servizi/adulti',
      image: 'images/ansia2.jpg'
    },
    {
      title: 'Terza Età',
      route: '/servizi/terzaEta',
      image: 'images/colloqui.jpg'
    }
  ];
}
