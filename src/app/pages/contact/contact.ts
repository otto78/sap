import { Component, AfterViewInit } from '@angular/core';
import { Title } from "../../components/title/title";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import emailjs from '@emailjs/browser';

declare const grecaptcha: any;

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [Title, CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact implements AfterViewInit {
  contactForm: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  // 🔑 Configurazioni EmailJS
  private serviceId = 'service_5rk58xl';
  private templateId = 'template_ye9p1xf';
  private publicKey = 'sk1aXC-U-BYtkpQfK';

  // 🧱 Configurazione reCAPTCHA
  siteKey = '6LeEU7oqAAAAAHS4rI3uOuwIaUIH9yU0msjluf03'; // la tua chiave pubblica
  captchaVerified = false;
  captchaResponse: string | null = null;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      nome: ['', Validators.required],
      cognome: ['', Validators.required],
      eta: ['', [Validators.required, Validators.min(1), Validators.max(150)]],
      email: ['', [Validators.required, Validators.email]],
      messaggio: ['', Validators.required],
      privacy: [false, Validators.requiredTrue]
    });
  }

  ngAfterViewInit() {
    // ✅ Aspetta che lo script Google sia disponibile
    const checkCaptchaReady = setInterval(() => {
      if (typeof grecaptcha !== 'undefined' && grecaptcha.render) {
        clearInterval(checkCaptchaReady);
        this.renderCaptcha();
      }
    }, 500);
  }

  renderCaptcha() {
    const container = document.getElementById('recaptcha-container');
    if (container) {
      grecaptcha.render(container, {
        sitekey: this.siteKey,
        callback: (response: string) => this.onCaptchaVerified(response),
        'expired-callback': () => this.onCaptchaExpired()
      });
    } else {
      console.error('⚠️ Contenitore reCAPTCHA non trovato.');
    }
  }

  onCaptchaVerified(response: string) {
    this.captchaVerified = true;
    this.captchaResponse = response;
    console.log('✅ reCAPTCHA verificato:', response);
  }

  onCaptchaExpired() {
    this.captchaVerified = false;
    this.captchaResponse = null;
    console.log('⚠️ reCAPTCHA scaduto');
  }

  async onSubmit() {
    if (this.contactForm.invalid || !this.captchaVerified) {
      Object.keys(this.contactForm.controls).forEach(key =>
        this.contactForm.get(key)?.markAsTouched()
      );

      if (!this.captchaVerified) alert('Per favore completa il reCAPTCHA');
      return;
    }

    this.isSubmitting = true;
    this.submitSuccess = false;
    this.submitError = false;

    const formData = this.contactForm.value;

    const emailParams = {
      name: formData.nome,
      surname: formData.cognome,
      age: formData.eta,
      email: formData.email,
      message: formData.messaggio,
      reply_to: formData.email
    };

    try {
      await emailjs.send(
        this.serviceId,
        this.templateId,
        emailParams,
        { publicKey: this.publicKey }
      );

      this.isSubmitting = false;
      this.submitSuccess = true;
      this.contactForm.reset();
      this.resetCaptcha();

      setTimeout(() => (this.submitSuccess = false), 5000);
    } catch (error) {
      console.error('Errore invio email:', error);
      this.isSubmitting = false;
      this.submitError = true;
      setTimeout(() => (this.submitError = false), 5000);
    }
  }

  resetCaptcha() {
    if (typeof grecaptcha !== 'undefined') {
      grecaptcha.reset();
      this.captchaVerified = false;
      this.captchaResponse = null;
    }
  }
}
