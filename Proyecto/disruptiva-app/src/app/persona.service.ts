import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private baseUrl = 'http://localhost:3051'; // Ajusta esta URL según la dirección de tu backend

  constructor(private http: HttpClient) {}

  agregarPersona(persona: any): Observable<any> {
    const url = `${this.baseUrl}/personas`; // Asegúrate de que la URL sea correcta
    return this.http.post(url, persona);
  }

  editarPersona(id: number, nuevaInformacion: any): Observable<any> {
    const url = `${this.baseUrl}/personas/${id}`; // Ajusta la URL para incluir la ID de la persona
    return this.http.put(url, nuevaInformacion);
  }

  // Agrega otros métodos para realizar otras operaciones como obtener personas, editar, eliminar, etc.
}
