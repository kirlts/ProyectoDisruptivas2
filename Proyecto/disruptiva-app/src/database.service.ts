import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private apiUrl = 'http://localhost:3051/personas'; // Cambia el puerto y la ruta según tu configuración

  constructor(private http: HttpClient) { }

  // Método para agregar una persona
  agregarPersona(persona: any) {
    return this.http.post(`${this.apiUrl}`, persona);
  }

  // Método para editar una persona
  editarPersona(id: number, nuevaInformacion: any) {
    // Incluye la ID en la URL de la solicitud PUT
    return this.http.put(`${this.apiUrl}/${id}`, nuevaInformacion);
  }
  // Método para obtener todas las personas
  obtenerTodasLasPersonas() {
    return this.http.get(`${this.apiUrl}`);
  }

  // Método para obtener una persona por su ID
  obtenerPersonaPorId(id: number) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // Método para eliminar una persona
  eliminarPersona(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
