import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.scss'
})
export class ContactoComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      mensaje: ['', Validators.required],
    });
  }

  enviarCorreo() {
    if (this.form.invalid) return;

    emailjs.send(
      'service_9dluyec',   // <-- reemplazá esto
      'template_dt6109u',  // <-- y esto también
      {
        nombre: this.form.value.nombre,
        correo: this.form.value.correo,
        mensaje: this.form.value.mensaje,
      },
      'vau51az6cwCuKHte2'       // <-- y tu user ID
    ).then(() => {
      alert('Correo enviado con éxito!');
      this.form.reset();
    }).catch((error) => {
      console.error('Error al enviar:', error);
      alert('Error al enviar el correo');
    });
  }
}