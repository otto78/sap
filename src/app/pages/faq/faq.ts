import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '../../components/title/title';

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [Title, CommonModule],
  templateUrl: './faq.html',
  styleUrls: ['./faq.scss'],
})
export class Faq {
  activeTab: number = 1;

  faqItems: FaqItem[] = [
    {
      id: 1,
      question: "Che differenza c'è tra Psicologo, Psicoterapeuta e Psichiatra?",
      answer: `Lo <strong>Psicologo</strong> è un laureato in psicologia che ha conseguito l'abilitazione dopo l'esame di Stato ed ha ottenuto l'iscrizione all'apposito albo professionale.
Lo psicologo offre consulenze psicologiche, effettua attività di diagnosi e svolge attività di sostegno psicologico.<br>
<b>Che cosa può fare:</b> colloqui diagnostici, counseling, sostegno psicologico, somministrare test.<br>
<b>Per chi è indicato:</b> per chi vuole avere una visione preliminare del proprio problema.<br><br>

Lo <b>Psicoterapeuta</b> di solito è uno psicologo (o raramente un medico) che ha conseguito una specializzazione almeno quadriennale in Psicoterapia.<br>
<b>Che cosa può fare:</b> diagnosi, psicoterapia. Se non è un medico non può prescrivere farmaci.<br>
<b>Per chi è indicato:</b> la psicoterapia cura una vasta gamma di disturbi. Si va da un lieve disagio personale causato da circostanze esterne a problemi sessuali, relazionali, psicosomatici, attacchi di panico, depressione, disordini dell'alimentazione…<br><br>

Lo <b>Psichiatra</b> è un medico specializzato in Psichiatria. Utilizza metodi, tecniche e strumenti di tipo fisico e farmaceutico.<br>
<b>Che cosa può fare:</b> colloqui diagnostici, psicoterapia, prescrivere psicofarmaci.<br>
<b>Per chi è indicato:</b> per tutte le persone che stanno vivendo un disagio psicologico fortissimo a causa del quale non riescono più a svolgere le normali attività della vita quotidiana.`,
    },
    {
      id: 2,
      question: 'Perché dovrei portare mio figlio dallo psicologo?',
      answer: `La maggior parte dei genitori, a meno che non si tratti di qualcosa di eclatante ed evidente, e confermato dal pediatra, esita prima di chiedere aiuto. "È solo un periodo", spesso dicono a se stessi, "crescendo ne verrà fuori".<br>
Quando i genitori si decidono, di solito la situazione è già diventata molto difficile, se non insostenibile, per loro o per il figlio. Anche quando i genitori non sono direttamente toccati dal comportamento del figlio, il disagio, l'ansia o la preoccupazione li spingono al punto di prendere dei provvedimenti.<br>
A volte i genitori portano il figlio in terapia perché c'è stato un evento straordinario, quale può essere la morte o la malattia di una persona amata oppure un'esperienza che lo spaventato come un incidente stradale o un terremoto.<br>
Raramente è il bambino a chiedere di vedere qualcuno, mentre sono parecchi gli adolescenti che iniziano una terapia. La scuola è spesso la prima ad accorgersene, ma talvolta non consiglia un aiuto terapeutico finché la situazione non diventa grave.<br>
Un grosso motivo per cui i genitori esitano a cercare aiuto è che pensano alla terapia come a un processo continuativo che comporta tempi lunghi, forse anni. Ovviamente ci sono casi che richiedono trattamenti a lungo termine. In genere, comunque, molti problemi si possono trattare nel giro di 3-6 mesi.`,
    },
    {
      id: 3,
      question: "Cos'è la psicoterapia ad indirizzo cognitivo-comportamentale?",
      answer: `<b>La psicoterapia cognitivo e comportamentale</b> si è sviluppata negli anni sessanta e nel tempo è venuta accreditandosi come l'intervento psicologico oggi di <b>prima scelta</b> nella maggior parte dei <b>problemi emozionali</b> e dei <b>disturbi psichiatrici.</b><br>
Tale approccio è definito dall'impiego di tecniche e strategie psicoterapeutiche basate sulla <b>ricerca scientifica</b> e sull'assoluto rispetto dell'<b>autonomia</b> e dei <b>valori</b> del cliente. Le tecniche terapeutiche vengono abbandonate via via che si profilano tecniche più efficaci, via via che si rinnova il corpus teorico.<br>
La psicoterapia cognitiva e comportamentale ha sviluppato trattamenti specifici per la maggior parte dei problemi e dei disturbi.`,
    },
    {
      id: 4,
      question: 'Quanto costa una seduta psicologica?',
      answer: `Una seduta psicologica ha dei costi variabili a seconda del tipo di intervento da attuare, quale ad esempio il sostegno psicologico, la psicoterapia, le attività di gruppo. Le tariffe vengono comunicate al paziente nel momento della presa in carico e della definizione del contratto terapeutico.<br>
Le tariffe di uno psicologo possono variare solitamente in base a questi parametri:<br><br>
<b>1. Formazione e professionalità:</b> maggiore sarà il bagaglio formativo su cui avrà investito tanto più alti saranno gli onorari che potrà richiedere. Prima e dopo ogni colloquio psicologico ci sono ore di studio, preparazione e formazione.<br><br>
<b>2. L'estensione del trattamento e la frequenza delle sedute</b> costituiscono la voce più importante per valutare l'investimento da parte del cliente. Prima ancora di chiedere quanto costa un percorso psicologico sarà opportuno ottenere una stima della durata dell'intervento psicologico. Uno psicologo clinico dovrebbe potere ipotizzare un tempo massimo in cui egli ritiene che il processo debba avere una fine.<br><br>
<b>3. L'utilizzo di particolari strumenti:</b> il costo della seduta può variare in base al fatto, ad esempio, che sia una valutazione oppure una seduta di sostegno psicologico. L'utilizzo di alcuni strumenti, come i test psicologici, ha un costo per il terapeuta (sia di acquisto che di somministrazione) e perciò la/le seduta/e potrebbe avere un costo maggiore per il cliente.`,
    },
    {
      id: 5,
      question: 'Come funziona il primo colloquio individuale?',
      answer: `Il primo colloquio ha la funzione di fornire un primo <b>ascolto del problema</b> del paziente, accoglierne la sofferenza, restituire una generale definizione del problema riscontrato e le <b>possibili soluzioni</b> per affrontarlo. Vengono fornite informazioni riguardo le caratteristiche della terapia cognitivo comportamentale (metodi, durata, costi, frequenza delle sedute) e affrontati dubbi ed incertezze del paziente.`,
    },
    {
      id: 6,
      question: 'Cosa significa "alleanza terapeutica"?',
      answer: `Significa che il paziente e il terapeuta riescono a lavorare in maniera <b>collaborativa</b> per raggiungere gli <b>obiettivi</b> concordati, condividono i metodi e le tecniche per raggiungerli, il paziente si impegna ad eseguire i compiti che il terapeuta proporrà di volta in volta.<br>
Alla base di ciò c'è la <b>motivazione al cambiamento</b> e la sufficiente <b>fiducia</b> nei confronti delle proprie <b>risorse</b> e dell'aiuto da parte del terapeuta che consente ad entrambi di lavorare ed impegnarsi per il raggiungimento degli obiettivi concordati e del benessere del paziente.`,
    },
    {
      id: 7,
      question: 'Quanto dura la terapia?',
      answer: `I tempi della terapia variano a seconda del tipo di disturbo, del livello di sofferenza, degli obiettivi concordati e naturalmente del tipo di trattamento attuato. In seguito alla restituzione diagnostica, nel momento in cui viene fatta una proposta di lavoro terapeutico si stima anche la durata dell'intervento.
I tempi sono soggetti a variazione anche in base alla risposta del singolo paziente all'intervento effettuato.`,
    },
  ];

  selectTab(tabId: number): void {
    this.activeTab = tabId;
  }
}
