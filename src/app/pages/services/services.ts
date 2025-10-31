import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '../../components/title/title';
import { ActivityCard } from '../../components/activity-card/activity-card';

export enum AgeCategory {
  BAMBINI = 'bambini',
  ADOLESCENTI = 'adolescenti',
  ADULTI = 'adulti',
  TERZA_ETA = 'terzaEta'
}

export interface Activity {
  ageCategory: AgeCategory;
  title: string;
  description: string;
  img: string;
}

@Component({
  selector: 'app-services',
  imports: [Title, ActivityCard],
  templateUrl: './services.html',
  styleUrl: './services.scss',
  standalone: true,
})
export class Services implements OnInit {
  allActivities: Activity[] = [
    {
      ageCategory: AgeCategory.BAMBINI,
      title: 'Percorso sull\'autostima',
      description: "L'autostima si costruisce dai primi anni e rappresenta quello che ognuno pensa di valere. Permette di rispondere alle domande: come sono? quali sono i miei punti di forza e debolezza? E porta ad accettarsi, volersi bene e voler bene agli altri. La bassa autostima si manifesta con atteggiamenti di chiusura, tono di voce basso, scarsa voglia di mettersi in gioco e accentuata paura di sbagliare.",
      img: '/images/autostima.jpg',
    },
    {
      ageCategory: AgeCategory.BAMBINI,
      title: 'Percorso sulle emozioni',
      description: "Un percorso che porta il bambino ad acquisire consapevolezza delle proprie emozioni e a capire come può affrontare in modo costruttivo le difficoltà che può incontrare nell’ambiente scolastico e familiare. Il bambino verrà guidato nell’accettazione di se stesso e degli altri, ad aumentare la tolleranza alla frustrazione e ad acquisire maggiori abilità di autoregolazione del comportamento.",
      img: '/images/emozioni.jpg',
    },
    {
      ageCategory: AgeCategory.BAMBINI,
      title: 'Ansia per la scuola',
      description: "La scuola richiede molteplici sforzi sfide. Apprendere nozioni, rimanere attenti per molto tempo, sostenere le prove in classe, relazionarsi con gl altri e riuscire ad essere autonomi. Questi passaggi possono generare molta preoccupazione e i bambini possono sentirsi in difficoltà e sviluppare alcuni sintomi (attacchi di panico, crisi d’ansia, rifiuto di andare a scuola…).",
      img: '/images/ansia.jpg',
    },
    {
      ageCategory: AgeCategory.ADOLESCENTI,
      title: 'Percorso sull\'autostima',
      description: "L’autostima si costruisce dai primi anni e rappresenta quello che ognuno pensa di valere. Permette di rispondere alle domande: come sono? quali sono i miei punti di forza e debolezza? E porta ad accettarsi, volersi bene e voler bene agli altri. La bassa autostima si manifesta con atteggiamenti di chiusura, tono di voce basso, scarsa voglia di mettersi in gioco e accentuata paura di sbagliare.",
      img: '/images/autostima2.jpg',
    },
    {
      ageCategory: AgeCategory.ADOLESCENTI,
      title: 'Disturbi d\'ansia',
      description: "L’adolescenza è un periodo importante nella vita di un individuo in cui spesso si ha preoccupazione per il giudizio altrui, paura di fallire e di non farcela nell’affrontare piccoli e grandi compiti. Per vincere l’ansia bisogna imparare ad affrontare la paura nelle sue diverse forme: di essere giudicati, derisi, di fare brutta figura, di non farcela, di non poter reggere le situazioni difficili…",
      img: '/images/ansia2.jpg',
    },
    {
      ageCategory: AgeCategory.ADULTI,
      title: 'Supporto alla genitorialità',
      description: "Prendersi cura di qualcuno è uno degli stadi fondamentali della crescita umana. Sostenere la genitorialità significa dunque “prendersi cura” di chi si prende cura. I genitori sono un esempio per i propri figli, perché possono proporre una modalità positiva di’“aver cura”, che tenga conto dell’altro, dei bisogni e desideri, ma che lasci spazio anche di sbagliare, senza sostituirsi al figlio.",
      img: '/images/genitorialità.jpg',
    },
    {
      ageCategory: AgeCategory.ADULTI,
      title: 'Disturbi d\'ansia',
      description: "Avere un disturbo d’ansia non significa semplicemente essere troppo ansiosi… Le persone con disturbo d’ansia sono molto sensibili allo stress, negano o non riescono a controllare gli eventi che hanno scatenato l’ansia e tentano di fronteggiarli evitando le situazioni che aggravano la loro ansia. Alcuni disturbi d’ansia sono: il disturbo da attacchi di panico, le fobie specifiche, l’agorafobia…",
      img: '/images/ansia3.jpg',
    },
    {
      ageCategory: AgeCategory.ADULTI,
      title: 'Colloqui psicologici',
      description: "Rivolti a chi vive un momento di disagio a seguito di particolari situazioni o momenti (come affrontare una situazione critica, prendere una decisione, trovare soluzione ad un problema, migliorare una relazione…). È un intervento focalizzato alla gestione delle difficoltà, supportando la persona nella ricerca di strategie e stimolando le risorse personali, per raggiungere il benessere.",
      img: '/images/colloqui.jpg',
    },
    {
      ageCategory: AgeCategory.TERZA_ETA,
      title: 'Memoria e stimolazione cognitiva',
      description: "Attività per mantenere attiva la mente, allenare la memoria e stimolare le funzioni cognitive. Un percorso ludico e coinvolgente per promuovere il benessere mentale nella terza età.",
      img: '',
    },
    {
      ageCategory: AgeCategory.TERZA_ETA,
      title: 'Sempre più ansia-ni',
      description: "Attività per mantenere attiva la mente, allenare la memoria e stimolare le funzioni cognitive. Un percorso ludico e coinvolgente per promuovere il benessere mentale nella terza età.",
      img: '',
    },
    {
      ageCategory: AgeCategory.TERZA_ETA,
      title: 'Gruppo di socializzazione',
      description: "Incontri di gruppo per condividere esperienze, creare legami sociali e contrastare la solitudine. Uno spazio accogliente dove sentirsi parte di una comunità attiva e partecipe.",
      img: '',
    },
  ];

  activities = signal<Activity[]>([]);
  currentCategory = signal<AgeCategory | null>(null);

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.url.subscribe(urlSegments => {
      // Prende l'ultimo segmento dell'URL (bambini, adolescenti, adulti, terzaEta)
      const category = urlSegments[urlSegments.length - 1]?.path as AgeCategory;
      
      if (category && Object.values(AgeCategory).includes(category)) {
        this.currentCategory.set(category);
        this.filterActivities(category);
      }
    });
  }

  private filterActivities(category: AgeCategory) {
    const filtered = this.allActivities.filter(
      activity => activity.ageCategory === category
    );
    this.activities.set(filtered);
  }
}