import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'slider.html',
  styleUrls: ['slider.scss']
})
export class SliderComponent implements OnInit, OnDestroy {
  // Signals invece di normali proprietà
  currentIndex = signal(0);
  prevIndex = signal(-1);

  private autoplayInterval: any;
  private touchStartX = 0;
  private touchEndX = 0;

  quotes = [
    {
      id: 1,
      text: 'Quando decidi che i tuoi problemi hanno a vedere con te... ti rendi conto che puoi controllare il tuo destino.',
      author: 'Albert Ellis'
    },
    {
      id: 2,
      text: 'Ciò che è in superficie va ben oltre a quello che il nostro sguardo può vedere',
      author: 'Aaron Beck'
    },
    {
      id: 3,
      text: 'Le crisi e le avversità spesso diventano occasione di crescita interiore',
      author: 'Isabel Allende'
    },
    {
      id: 4,
      text: '...la crescita non è terminata e il processo creativo iniziato in terapia è adesso sotto la propria responsabilità',
      author: 'Alexander Lowen'
    },
    {
      id: 5,
      text: 'Abituati a vedere le cose anche dal punto di vista dell\'altro',
      author: 'Robert Baden-Powell'
    }
  ];

  ngOnInit() {
    this.startAutoplay();
    this.setupTouchHandlers();
  }

  ngOnDestroy() {
    this.stopAutoplay();
  }

  startAutoplay() {
    this.autoplayInterval = setInterval(() => {
      this.nextSlide();
    }, 8000);
  }

  stopAutoplay() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
    }
  }

  nextSlide() {
    this.prevIndex.set(this.currentIndex());
    this.currentIndex.set((this.currentIndex() + 1) % this.quotes.length);
  }

  prevSlide() {
    this.prevIndex.set(this.currentIndex());
    this.currentIndex.set(
      this.currentIndex() === 0 ? this.quotes.length - 1 : this.currentIndex() - 1
    );
  }

  goToSlide(index: number) {
    if (index !== this.currentIndex()) {
      this.prevIndex.set(this.currentIndex());
      this.currentIndex.set(index);
      this.stopAutoplay();
      this.startAutoplay();
    }
  }

  setupTouchHandlers() {
    if (typeof window !== 'undefined') {
      const slider = document.querySelector('.quotes-wrapper') as HTMLElement | null;
      if (slider) {
        slider.addEventListener('touchstart', (e) => {
          const touchEvent = e as TouchEvent;
          this.touchStartX = touchEvent.changedTouches[0].screenX;
        });

        slider.addEventListener('touchend', (e) => {
          const touchEvent = e as TouchEvent;
          this.touchEndX = touchEvent.changedTouches[0].screenX;
          this.handleSwipe();
        });
      }
    }
  }

  handleSwipe() {
    const swipeThreshold = 50;
    const diff = this.touchStartX - this.touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        this.nextSlide();
      } else {
        this.prevSlide();
      }
      this.stopAutoplay();
      this.startAutoplay();
    }
  }
}
