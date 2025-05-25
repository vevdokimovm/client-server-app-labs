import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Author } from '../../authors/entities/author.entity';

@Entity('affiliations')
export class Affiliation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  companyName: string;

  @Column()
  address: string;

  @Column()
  specialization: string;

  @ManyToMany(() => Author, author => author.affiliations)
  authors: Author[];
}
