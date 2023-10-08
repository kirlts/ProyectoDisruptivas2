import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from '../../database.service';
import { PersonaService } from '../persona.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-editar-persona',
  templateUrl: './editar-persona.component.html',
  styleUrls: ['./editar-persona.component.css']
})
export class EditarPersonaComponent implements OnInit {
  idForm: FormGroup;
  personaForm: FormGroup;
  personaId: number = 0;
  errorMessage: string = '';
  persona: any;

  constructor(
    private fb: FormBuilder,
    private databaseService: DatabaseService,
    private personaService: PersonaService, // Asegúrate de que el nombre del servicio sea correcto aquí
    private route: ActivatedRoute,
    private router: Router
  ) {

    this.idForm = this.fb.group({
      id: ['', Validators.required] // Campo para ingresar el ID
    });

    this.personaForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      fecha_nacimiento: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      this.personaId = +idParam;
    }
  }

  cargarPersona() {
    const idControl = this.idForm.get('id');

    if (idControl && idControl.valid) {
      const id = idControl.value; // Obtén el valor de ID desde el formulario
      this.personaId = id; // Actualiza la personaId en el componente
      this.databaseService.obtenerPersonaPorId(id).subscribe(
        (persona: any) => {
          this.persona = persona; // Almacena la persona cargada
          this.personaForm.setValue({
            nombre: persona.nombre,
            apellido: persona.apellido,
            fecha_nacimiento: persona.fecha_nacimiento
          });
        },
        (error) => {
          this.errorMessage = 'No se pudo cargar la persona. Verifica la ID.';
        }
      );
    }
  }


  editarPersona() {
    if (this.personaForm.valid) {
      const nuevaInformacion = this.personaForm.value;
      this.personaService.editarPersona(this.personaId, nuevaInformacion).pipe(
        catchError((error) => {
          this.errorMessage = 'Error al editar la persona. Verifica los datos.';
          return throwError(error);
        })
      ).subscribe(() => {
        this.router.navigate(['/listar-personas']);
      });
    }
  }

}
