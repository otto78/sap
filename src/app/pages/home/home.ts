import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SliderComponent } from "../../components/slider/slider";

interface Service {
  title: string;
  route: string;
  image: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, SliderComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home {
  services: Service[] = [
    {
      title: 'Bambini',
      route: '/servizi/bambini',
      image: 'images/bambini.jpg'
    },
    {
      title: 'Adolescenti',
      route: '/servizi/adolescenti',
      image: 'images/adolescenti.jpg'
    },
    {
      title: 'Adulti',
      route: '/servizi/adulti',
      image: 'images/adulti.jpg'
    },
    {
      title: 'Terza Età',
      route: '/servizi/terzaEta',
      image: 'images/terza_eta.jpg'
    }
  ];
}
