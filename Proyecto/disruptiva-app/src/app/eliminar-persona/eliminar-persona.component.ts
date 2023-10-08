import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DatabaseService } from '../../database.service';

@Component({
  selector: 'app-eliminar-persona',
  templateUrl: './eliminar-persona.component.html',
  styleUrls: ['./eliminar-persona.component.css']
})
export class EliminarPersonaComponent implements OnInit {
  personaId: number;
  personaForm: FormGroup;
  persona: any;
  confirmacionVisible: boolean = false;

  constructor(
    private fb: FormBuilder,
    private databaseService: DatabaseService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.personaId = 0; // Inicializa con un valor predeterminado
    this.personaForm = this.fb.group({
      id: [''] // Agrega un control 'id' al formulario
    });
  }

  ngOnInit(): void {
    // No necesitas inicializar la personaId aquí
  }

  cargarPersona() {
    const idControl = this.personaForm.get('id');

    if (idControl && idControl.valid) {
      const id = idControl.value; // Obtén el valor de ID desde el formulario
      this.databaseService.obtenerPersonaPorId(id).subscribe(
        (persona: any) => {
          this.persona = persona; // Almacena la persona cargada
          this.confirmacionVisible = true; // Muestra el mensaje de confirmación
        },
        (error) => {
          // Maneja el error aquí
          this.persona = null; // Limpia la persona si no se pudo cargar
          this.confirmacionVisible = false; // Oculta el mensaje de confirmación
        }
      );
    }
  }

  mostrarConfirmacion() {
    // Muestra el mensaje de confirmación
    this.confirmacionVisible = true;
  }

  confirmarEliminar() {
    if (this.persona) {
      this.databaseService.eliminarPersona(this.persona.id).subscribe(() => {
        // Puedes agregar aquí una redirección o cualquier otra acción después de eliminar la persona.
        this.router.navigate(['/listar-personas']);
      });
    }
  }


  cancelar() {
    this.confirmacionVisible = false;
  }
}
