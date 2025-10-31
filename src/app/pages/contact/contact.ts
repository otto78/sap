import { Component } from '@angular/core';
import { Title } from "../../components/title/title";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import  emailjs  from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [Title, CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  contactForm: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  // 🔑 Configurazioni EmailJS
  private serviceId = 'service_5rk58xl';
  private templateId = 'template_ye9p1xf';
  private publicKey = 'sk1aXC-U-BYtkpQfK';

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

  async onSubmit() {
    if (this.contactForm.invalid) {
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
      return;
    }

    this.isSubmitting = true;
    this.submitSuccess = false;
    this.submitError = false;

    const formData = this.contactForm.value;

    // 📨 Dati da inviare al template EmailJS
    const emailParams = {
      name: formData.nome,
      surname: formData.cognome,
      age: formData.eta,
      email: formData.email,
      message: formData.messaggio,
      reply_to: formData.email
    };

    // whve ikfz ntrx pjew

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

      // Nascondi il messaggio di successo dopo 5s
      setTimeout(() => (this.submitSuccess = false), 5000);
    } catch (error) {
      console.error('Errore invio email:', error);
      this.isSubmitting = false;
      this.submitError = true;
      setTimeout(() => (this.submitError = false), 5000);
    }
  }
}
