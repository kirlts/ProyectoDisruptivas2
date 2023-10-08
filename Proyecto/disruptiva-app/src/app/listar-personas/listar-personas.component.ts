import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../database.service';

@Component({
  selector: 'app-listar-personas',
  templateUrl: './listar-personas.component.html',
  styleUrls: ['./listar-personas.component.css']
})
export class ListarPersonasComponent implements OnInit {
  personas: any[] = [];

  constructor(private databaseService: DatabaseService) { }

  ngOnInit(): void {

    console.log('ListarPersonasComponent cargado');

    this.databaseService.obtenerTodasLasPersonas().subscribe((data: any) => {
      this.personas = data;
    });
  }
}
