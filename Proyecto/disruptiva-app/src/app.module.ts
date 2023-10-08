import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PersonaService } from './app/persona.service'; // Ajusta la ruta de importación según tu estructura de archivos

// Importa los componentes que has generado
import { ListarPersonasComponent } from './app/listar-personas/listar-personas.component';
import { AgregarPersonaComponent } from './app/agregar-persona/agregar-persona.component';
import { EditarPersonaComponent } from './app/editar-persona/editar-persona.component';
import { EliminarPersonaComponent } from './app/eliminar-persona/eliminar-persona.component';
import { TestComponent } from './app/test/test.component';

@NgModule({
  declarations: [
    // Agrega aquí los nombres de tus componentes
    AppComponent,
    ListarPersonasComponent,
    AgregarPersonaComponent,
    EditarPersonaComponent,
    EliminarPersonaComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  providers: [
    PersonaService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
