import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '../../components/title/title';
import { ActivityCard } from '../../components/activity-card/activity-card';
import { NgClass } from '@angular/common';

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
  imports: [Title, ActivityCard, NgClass],
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
      img: 'images/autostima_bambini.jpg',
    },
    {
      ageCategory: AgeCategory.BAMBINI,
      title: 'Percorso sulle emozioni',
      description: "Un percorso che porta il bambino ad acquisire consapevolezza delle proprie emozioni e a capire come può affrontare in modo costruttivo le difficoltà che può incontrare nell’ambiente scolastico e familiare. Il bambino verrà guidato nell’accettazione di se stesso e degli altri, ad aumentare la tolleranza alla frustrazione e ad acquisire maggiori abilità di autoregolazione del comportamento.",
      img: 'images/emozioni_bambini.jpg',
    },
    {
      ageCategory: AgeCategory.BAMBINI,
      title: 'Ansia per la scuola',
      description: "La scuola richiede molteplici sforzi sfide. Apprendere nozioni, rimanere attenti per molto tempo, sostenere le prove in classe, relazionarsi con gl altri e riuscire ad essere autonomi. Questi passaggi possono generare molta preoccupazione e i bambini possono sentirsi in difficoltà e sviluppare alcuni sintomi (attacchi di panico, crisi d’ansia, rifiuto di andare a scuola…).",
      img: 'images/ansia_scuola.jpg',
    },
    {
      ageCategory: AgeCategory.ADOLESCENTI,
      title: 'Percorso sull\'autostima',
      description: "L’autostima si costruisce dai primi anni e rappresenta quello che ognuno pensa di valere. Permette di rispondere alle domande: come sono? quali sono i miei punti di forza e debolezza? E porta ad accettarsi, volersi bene e voler bene agli altri. La bassa autostima si manifesta con atteggiamenti di chiusura, tono di voce basso, scarsa voglia di mettersi in gioco e accentuata paura di sbagliare.",
      img: 'images/autostima_adolescenti.jpg',
    },
    {
      ageCategory: AgeCategory.ADOLESCENTI,
      title: 'Disturbi d\'ansia',
      description: "L’adolescenza è un periodo importante nella vita di un individuo in cui spesso si ha preoccupazione per il giudizio altrui, paura di fallire e di non farcela nell’affrontare piccoli e grandi compiti. Per vincere l’ansia bisogna imparare ad affrontare la paura nelle sue diverse forme: di essere giudicati, derisi, di fare brutta figura, di non farcela, di non poter reggere le situazioni difficili…",
      img: 'images/ansia_adolescenti.jpg',
    },
    {
      ageCategory: AgeCategory.ADULTI,
      title: 'Supporto alla genitorialità',
      description: "Prendersi cura di qualcuno è uno degli stadi fondamentali della crescita umana. Sostenere la genitorialità significa dunque “prendersi cura” di chi si prende cura. I genitori sono un esempio per i propri figli, perché possono proporre una modalità positiva di’“aver cura”, che tenga conto dell’altro, dei bisogni e desideri, ma che lasci spazio anche di sbagliare, senza sostituirsi al figlio.",
      img: 'images/genitorialita.jpg',
    },
    {
      ageCategory: AgeCategory.ADULTI,
      title: 'Disturbi d\'ansia',
      description: "Avere un disturbo d’ansia non significa semplicemente essere troppo ansiosi… Le persone con disturbo d’ansia sono molto sensibili allo stress, negano o non riescono a controllare gli eventi che hanno scatenato l’ansia e tentano di fronteggiarli evitando le situazioni che aggravano la loro ansia. Alcuni disturbi d’ansia sono: il disturbo da attacchi di panico, le fobie specifiche, l’agorafobia…",
      img: 'images/ansia_adulti.jpg',
    },
    {
      ageCategory: AgeCategory.ADULTI,
      title: 'Colloqui psicologici',
      description: "Rivolti a chi vive un momento di disagio a seguito di particolari situazioni o momenti (come affrontare una situazione critica, prendere una decisione, trovare soluzione ad un problema, migliorare una relazione…). È un intervento focalizzato alla gestione delle difficoltà, supportando la persona nella ricerca di strategie e stimolando le risorse personali, per raggiungere il benessere.",
      img: 'images/colloqui_psicologici.jpg',
    },
    {
      ageCategory: AgeCategory.TERZA_ETA,
      title: 'Affrontare Depressione e Ansia',
      description: 'La terza età è un periodo di vita ricco di cambiamenti significativi: pensionamento, evoluzione dei ruoli sociali, modifiche della salute fisica e, talvolta, lutti o perdite. Questi passaggi possono rendere gli individui più vulnerabili allo sviluppo o all\'acutizzazione di disturbi emotivi come la Depressione e l\'Ansia. È fondamentale riconoscere che questi non sono semplicemente "effetti collaterali" inevitabili dell\'invecchiamento, ma condizioni cliniche che meritano attenzione e trattamento specializzato. La depressione e l\'ansia non trattate negli anziani hanno un impatto diretto sulla qualità della vita, sulla gestione delle malattie croniche e sul rischio di isolamento.',
      img: 'images/affrontare_depressione_ansia.jpg',
    },
    {
      ageCategory: AgeCategory.TERZA_ETA,
      title: 'L\'Elaborazione del Lutto nella Terza Età',
      description: "Il lutto è un'esperienza universale e naturale, ma nella terza età può presentarsi con sfide uniche e un impatto più complesso. In questa fase della vita, la perdita di un coniuge, un partner, amici stretti o anche la perdita di aspetti della propria identità (salute, autonomia, ruolo lavorativo) sono eventi frequenti che richiedono un'attenta elaborazione.Quando il lutto non viene affrontato, i sentimenti di tristezza, rabbia e disperazione possono facilmente cronicizzarsi, alimentando i sintomi depressivi e ansiosi, isolando l'individuo e compromettendo la sua salute fisica. Offro uno spazio protetto dove la persona può rispettare il proprio dolore e imparare a portarlo con sé in modo costruttivo. Insieme, lavoreremo per integrare la perdita come parte della storia di vita, ritrovando la forza di guardare avanti senza farsi paralizzare dalla sofferenza.",
      img: 'images/elaborazione_lutto.jpg',
    },
    {
      ageCategory: AgeCategory.TERZA_ETA,
      title: 'Riorganizzazione vita',
      description: "La terza età non è un punto di arrivo, ma una nuova fase di vita che richiede una profonda e talvolta faticosa riorganizzazione. Eventi come il pensionamento, i cambiamenti fisici, o la perdita dei ruoli tradizionali (genitore a tempo pieno, professionista attivo) possono generare un senso di vuoto, smarrimento e perdita di identità. Molti anziani si chiedono: \"Chi sono io, ora che non ho più il mio ruolo abituale?\" Questo momento di transizione può essere affrontato come un'opportunità per ridefinire sé stessi, riscoprire desideri sopiti e costruire un futuro che sia significativo e gratificante.",
      img: 'images/riorganizzazione_vita.jpg',
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