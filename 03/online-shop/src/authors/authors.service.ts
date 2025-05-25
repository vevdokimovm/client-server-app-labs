import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { Author } from './entities/author.entity';
import { Affiliation } from '../affiliations/entities/affiliation.entity';
import { Article } from '../articles/entities/article.entity';
import { CreateAuthorDto } from './dto/create-author.dto';
import { IncompleteAuthorDto } from './dto/incomplete-author.dto';

@Injectable()
export class AuthorService {
  constructor(
    @InjectRepository(Author)
    private authorRepo: Repository<Author>,
    @InjectRepository(Affiliation)
    private affiliationRepo: Repository<Affiliation>,
    @InjectRepository(Article)
    private articleRepo: Repository<Article>,
  ) {}

  async create(authorDto: CreateAuthorDto): Promise<Author> {
    const author = this.authorRepo.create();
    author.fullname = authorDto.fullname;
    author.position = authorDto.position;
    author.grade = authorDto.grade;
    const affiliations = await this.affiliationRepo.findBy({ id: In(authorDto.affiliations) });
    author.affiliations = affiliations;
    return this.authorRepo.save(author);
  }

  async findAll(): Promise<Author[]> {
    return this.authorRepo.find({ relations: ['affiliations', 'articles'] });
  }

  async findIncomplete(): Promise<IncompleteAuthorDto[]> {
    const authors = await this.authorRepo.find();
    return authors.map(a => ({
      id: a.id,
      fullname: a.fullname,
      position: a.position,
    }));
  }

  async remove(id: number) {
    await this.authorRepo.delete(id);
  }
}
