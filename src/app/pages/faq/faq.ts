import { Component } from '@angular/core';
import { Title as AppTitle } from "../../components/title/title";

@Component({
  selector: 'app-faq',
  imports: [AppTitle],
  templateUrl: './faq.html',
  styleUrl: './faq.scss',
  standalone: true
})
export class Faq {

}
