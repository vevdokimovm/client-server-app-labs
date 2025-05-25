import { Controller, Get } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Articles')
@Controller('articles')
export class ArticlesController {
  constructor(private readonly service: ArticlesService) {}

  @ApiOperation({ summary: 'Получить все статьи' })
  @Get()
  findAll() {
    return this.service.findAll();
  }
}
