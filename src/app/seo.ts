export interface PageSeo {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url: string;
}

export const SEO_DATA: { [path: string]: PageSeo } = {
  '': {
    title: 'Home | Sefora Antonello Psicologa',
    description: 'Psicologa clinica a San Stino di Livenza. Percorsi di crescita personale e benessere.',
    keywords: 'psicologa, psicoterapia, crescita personale, San Stino di Livenza',
    image: 'https://www.seforaantonello.it/assets/fotoProfilo_borderless.jpg',
    url: 'https://www.seforaantonello.it/'
  },
  'chi-sono': {
    title: 'Chi sono | Sefora Antonello Psicologa',
    description: 'Conosci la dott.ssa Sefora Antonello, la sua formazione e il suo approccio terapeutico.',
    keywords: 'psicologa, chi sono, Sefora Antonello, formazione',
    image: 'https://www.seforaantonello.it/assets/fotoProfilo_borderless.jpg',
    url: 'https://www.seforaantonello.it/chi-sono'
  },
  'faq': {
    title: 'FAQ | Sefora Antonello Psicologa',
    description: 'Domande frequenti su psicoterapia, supporto psicologico e crescita personale.',
    keywords: 'FAQ psicologa, domande frequenti psicoterapia, crescita personale',
    image: 'https://www.seforaantonello.it/assets/fotoProfilo_borderless.jpg',
    url: 'https://www.seforaantonello.it/faq'
  },
  'contatti': {
    title: 'Contatti | Sefora Antonello Psicologa',
    description: 'Contatta la dott.ssa Sefora Antonello per un primo colloquio o informazioni.',
    keywords: 'contatti psicologa, Sefora Antonello studio, informazioni',
    image: 'https://www.seforaantonello.it/assets/fotoProfilo_borderless.jpg',
    url: 'https://www.seforaantonello.it/contatti'
  },
  'servizi/bambini': {
    title: 'Servizi per Bambini | Sefora Antonello Psicologa',
    description: 'Percorsi di supporto psicologico per bambini con la dott.ssa Sefora Antonello.',
    keywords: 'psicologa bambini, supporto psicologico bambini, Sefora Antonello',
    image: 'https://www.seforaantonello.it/assets/servizi-bambini.jpg',
    url: 'https://www.seforaantonello.it/servizi/bambini'
  },
  'servizi/adolescenti': {
    title: 'Servizi per Adolescenti | Sefora Antonello Psicologa',
    description: 'Percorsi per adolescenti e famiglie con la dott.ssa Sefora Antonello.',
    keywords: 'psicologa adolescenti, supporto adolescenza, Sefora Antonello',
    image: 'https://www.seforaantonello.it/assets/servizi-adolescenti.jpg',
    url: 'https://www.seforaantonello.it/servizi/adolescenti'
  },
  'servizi/adulti': {
    title: 'Servizi per Adulti | Sefora Antonello Psicologa',
    description: 'Percorsi per adulti con la dott.ssa Sefora Antonello per crescita e benessere.',
    keywords: 'psicologa adulti, crescita personale adulti, Sefora Antonello',
    image: 'https://www.seforaantonello.it/assets/servizi-adulti.jpg',
    url: 'https://www.seforaantonello.it/servizi/adulti'
  },
  'servizi/terzaEta': {
    title: 'Servizi per Terza Età | Sefora Antonello Psicologa',
    description: 'Supporto psicologico per la terza età con la dott.ssa Sefora Antonello.',
    keywords: 'psicologa terza età, supporto anziani, Sefora Antonello',
    image: 'https://www.seforaantonello.it/assets/servizi-terzaeta.jpg',
    url: 'https://www.seforaantonello.it/servizi/terzaEta'
  },
  'privacy': {
    title: 'Privacy | Sefora Antonello Psicologa',
    description: 'Informativa sulla privacy per lo studio della dott.ssa Sefora Antonello.',
    keywords: 'privacy psicologa, informativa privacy studio, Sefora Antonello',
    image: 'https://www.seforaantonello.it/assets/privacy.jpg',
    url: 'https://www.seforaantonello.it/privacy'
  },
  '**': {
    title: 'Pagina non trovata | Sefora Antonello Psicologa',
    description: 'La pagina richiesta non è stata trovata.',
    keywords: '404, pagina non trovata, Sefora Antonello',
    image: 'https://www.seforaantonello.it/assets/404.jpg',
    url: 'https://www.seforaantonello.it/'
  }
};
