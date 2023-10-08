import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonaService } from '../persona.service'; // Asegúrate de importar correctamente tu servicio

@Component({
  selector: 'app-agregar-persona',
  templateUrl: './agregar-persona.component.html',
  styleUrls: ['./agregar-persona.component.css']
})
export class AgregarPersonaComponent {
  miFormulario: FormGroup;

  constructor(private fb: FormBuilder, private personaService: PersonaService) {
    this.miFormulario = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      fecha_nacimiento: ['', Validators.required]
    });
  }

  agregarPersona() {
    if (this.miFormulario.valid) {
      const nuevaPersona = this.miFormulario.value;

      if (!nuevaPersona.fecha_nacimiento) {
        console.error('Fecha de nacimiento es requerida.');
        return; // Detiene la ejecución si la fecha de nacimiento está vacía
      }

      nuevaPersona.fecha_nacimiento = this.formatoFecha(nuevaPersona.fecha_nacimiento);

      // Llama al servicio para agregar la persona utilizando nuevaPersona

      console.log('Datos que se van a enviar:', nuevaPersona);

      this.personaService.agregarPersona(nuevaPersona).subscribe(
        (response) => {
          // Maneja la respuesta del backend (puede ser una confirmación de éxito, el objeto persona creado, etc.)
          console.log('Persona agregada con éxito:', response);
          // Puedes redirigir al usuario a la página de lista de personas u realizar otras acciones necesarias
        },
        (error) => {
          // Maneja los errores en caso de que la solicitud no se realice correctamente
          console.error('Error al agregar persona:', error);
          // Muestra un mensaje de error o realiza acciones de manejo de errores
        }
      );
    } else {
      // El formulario no es válido, realiza alguna acción o muestra un mensaje de error
      console.error('Formulario no válido. Por favor, complete todos los campos.');
    }
  }

  formatoFecha(fecha: string): string {
    // Formatea la fecha al formato 'YYYY-MM-DD'
    const date = new Date(fecha);
    return date.toISOString().split('T')[0];
  }
}
