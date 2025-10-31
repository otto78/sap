import { Component, input } from '@angular/core';
import { Activity } from '../../pages/services/services';
import { Button } from '../button/button';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-activity-card',
  standalone: true,
  imports: [Button, CommonModule],
  templateUrl: './activity-card.html',
  styleUrl: './activity-card.scss',
})
export class ActivityCard {
  activity = input.required<Activity>();
}