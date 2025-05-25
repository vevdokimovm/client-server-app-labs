import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Author } from '../../authors/entities/author.entity';

@Entity('articles')
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  keywords: string;

  @Column()
  abstract: string;

  @ManyToMany(() => Author, author => author.articles)
  authors: Author[];
}
