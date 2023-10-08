import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { PersonasService } from './personas.service';
import { Persona } from './entities/persona.entity';

@Controller('personas')
export class PersonasController {
  constructor(private readonly personasService: PersonasService) {}

  @Post()
  create(@Body() persona: Persona) {
    return this.personasService.create(persona);
  }

  @Get()
  findAll() {
    return this.personasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personasService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() persona: Persona,
  ): Promise<Persona> {
    console.log(`PUT request received for ID: ${id}`);
    return this.personasService.update(Number(id), persona);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personasService.remove(+id);
  }
}
