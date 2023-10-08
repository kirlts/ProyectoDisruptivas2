import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    CreateDateColumn,
    Timestamp,
    UpdateDateColumn,
} from 'typeorm';
@Entity()
export class Persona {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column({ nullable: true })
    apellido: string;

    @Column()
    fecha_nacimiento: Date;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Timestamp;
  
    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Timestamp;

}
