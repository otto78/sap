import { Component } from '@angular/core';
import { Title } from "../../components/title/title";
import { ActivityCard } from "../../components/activity-card/activity-card";

@Component({
  selector: 'app-services',
  imports: [Title, ActivityCard],
  templateUrl: './services.html',
  styleUrl: './services.scss',
  standalone: true
})
export class Services {

}
