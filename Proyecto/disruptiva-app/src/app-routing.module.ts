import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarPersonasComponent } from './app/listar-personas/listar-personas.component';
import { AgregarPersonaComponent } from './app/agregar-persona/agregar-persona.component';
import { EditarPersonaComponent } from './app/editar-persona/editar-persona.component';
import { EliminarPersonaComponent } from './app/eliminar-persona/eliminar-persona.component';
import { TestComponent } from './app/test/test.component';

const routes: Routes = [
  { path: '', redirectTo: '/listar-personas', pathMatch: 'full' },
  { path: 'listar-personas', component: ListarPersonasComponent },
  { path: 'agregar-persona', component: AgregarPersonaComponent },
  { path: 'editar-persona', component: EditarPersonaComponent },
  { path: 'eliminar-persona', component: EliminarPersonaComponent },
  { path: 'test', component: TestComponent }, // Ruta para la página de prueba
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
