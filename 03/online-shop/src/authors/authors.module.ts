import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Author } from './entities/author.entity';
import { Affiliation } from '../affiliations/entities/affiliation.entity';
import { Article } from '../articles/entities/article.entity';
import { AuthorsController } from './authors.controller';
import { AuthorService } from './authors.service';

@Module({
  imports: [TypeOrmModule.forFeature([Author, Affiliation, Article])],
  controllers: [AuthorsController],
  providers: [AuthorService],
})
export class AuthorsModule {}
