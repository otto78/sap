import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { TopHeader } from "./components/top-header/top-header";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, TopHeader, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
