import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Article } from '../../articles/entities/article.entity';
import { Affiliation } from '../../affiliations/entities/affiliation.entity';

@Entity('authors')
export class Author {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullname: string;

  @Column()
  position: string;

  @Column()
  grade: string;

  @ManyToMany(() => Article, article => article.authors)
  @JoinTable({ name: 'author_article' })
  articles: Article[];

  @ManyToMany(() => Affiliation, affiliation => affiliation.authors)
  @JoinTable({ name: 'author_affiliation' })
  affiliations: Affiliation[];
}
