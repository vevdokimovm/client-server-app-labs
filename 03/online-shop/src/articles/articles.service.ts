import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Article } from './entities/article.entity';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(Article)
    private articleRepo: Repository<Article>,
  ) {}

  findAll(): Promise<Article[]> {
    return this.articleRepo.find();
  }
}
