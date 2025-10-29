import { Component, signal } from '@angular/core';
import { Button } from "../button/button";

@Component({
  selector: 'app-top-header',
  imports: [Button],
  templateUrl: './top-header.html',
  styleUrl: './top-header.scss',
  standalone: true,
})
export class TopHeader {
  contactInfo = signal({ 
    phone: '+39 346 973 0190',
    position: 'CEMS', 
    email: 'antonellosefora@gmail.com' 
  });

  callPhone(event: Event) {
    event.preventDefault();
    window.location.href = `tel:${this.contactInfo().phone}`;
  }

  sendEmail(event: Event) {
    event.preventDefault(); // <-- Dice al browser: "Non seguire l'href"
    console.log('Invia email a', this.contactInfo().email);
    window.location.href = `mailto:${this.contactInfo().email}`;
  }

  goToPosition(event: Event) {
    event.preventDefault();
    window.open(`https://www.google.it/maps/place/Viale+Trieste,+112,+30029+San+Stino+di+Livenza+VE/@45.7266409,12.6893418,759m/data=!3m2!1e3!4b1!4m6!3m5!1s0x477be21c09dbcda9:0x29fa320f5102e961!8m2!3d45.7266409!4d12.6893418!16s%2Fg%2F11y7m78q_j?hl=it&entry=ttu&g_ep=EgoyMDI1MTAyMi4wIKXMDSoASAFQAw%3D%3D`, '_blank');
  }

  navigateToAppointment() {
    console.log('Naviga a prenotazione appuntamento');
  }
}
