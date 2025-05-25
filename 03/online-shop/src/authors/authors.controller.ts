import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { AuthorService } from './authors.service';
import { CreateAuthorDto } from './dto/create-author.dto';

@ApiTags('Authors')
@Controller('authors')
export class AuthorsController {
  constructor(private readonly authorService: AuthorService) {}

  @ApiOperation({ summary: 'Создать автора' })
  @Post()
  create(@Body() dto: CreateAuthorDto) {
    return this.authorService.create(dto);
  }

  @ApiOperation({ summary: 'Получить всех авторов' })
  @Get()
  findAll() {
    return this.authorService.findAll();
  }

  @ApiOperation({ summary: 'Получить укороченную информацию об авторах' })
  @Get('incomplete')
  findIncomplete() {
    return this.authorService.findIncomplete();
  }
}
