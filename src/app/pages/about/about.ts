import { Component } from '@angular/core';
import { Title } from "../../components/title/title";

@Component({
  selector: 'app-about',
  imports: [Title],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  standalone: true
})
export class About {

}
