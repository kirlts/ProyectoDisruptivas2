import { Injectable, NotFoundException } from '@nestjs/common';
import { Persona } from './entities/persona.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class PersonasService {

  constructor(
    @InjectRepository(Persona)
    private readonly personaRepository: Repository<Persona>,
  ) {}

  
  async create(persona: Persona): Promise<Persona> {
    return await this.personaRepository.save(persona);
  }

  async findAll(): Promise<Persona[]> {
    return await this.personaRepository.find();
  }

  async findOne(id: number): Promise<Persona> {
    const persona = await this.personaRepository.findOne({ where: { id } });
    if (!persona) {
      throw new NotFoundException(`Persona con ID ${id} no encontrada`);
    }
    return persona;
  }

  async update(id: number, persona: Persona): Promise<Persona> {
    await this.personaRepository.update(id, persona)
    return this.personaRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    const persona = await this.findOne(id);
    await this.personaRepository.remove(persona);
  }
  
}
