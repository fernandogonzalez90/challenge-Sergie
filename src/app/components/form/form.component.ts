import { Component} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

export interface FormData {
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  direccion: string;
  fecha: Date;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  formulario: FormGroup;
  datoFormulario?: FormData;

  constructor(
    private fb: FormBuilder
  ){
    this.formulario = this.fb.group({
      nombre: [''],
      apellido: [''],
      email: [''],
      telefono: [''],
      direccion: [''],
      fecha: [''],
    });
  }

  openModal() {
    // Obtén una referencia al modal por su ID
    const modal = document.getElementById('exampleModal');

    // Abre el modal
    if (modal) {
      modal.classList.add('show');
      modal.style.display = 'block';
    }
  }

  closeModal() {
    // Obtén una referencia al modal por su ID
    const modal = document.getElementById('exampleModal');

    // Cierra el modal
    if (modal) {
      modal.classList.remove('show');
      modal.style.display = 'none';
    }
  }

  enviar(){
    if(this.formulario.valid){
      const day = this.formulario.value.fecha.slice(0,2);
      const month = this.formulario.value.fecha.slice(2,4) - 1;
      const year = this.formulario.value.fecha.slice(4,8);
      const fechaFinal = new Date(year, month, day);
      this.formulario.value.fecha = new Date(fechaFinal);
      this.datoFormulario = this.formulario.value;
      this.openModal();
    }
    
    this.formulario.reset();
  }

}

