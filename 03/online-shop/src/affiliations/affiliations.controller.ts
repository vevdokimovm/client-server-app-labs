import { Controller, Get } from '@nestjs/common';
import { AffiliationsService } from './affiliations.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Affiliations')
@Controller('affiliations')
export class AffiliationsController {
  constructor(private readonly service: AffiliationsService) {}

  @ApiOperation({ summary: 'Получить все аффилиации' })
  @Get()
  findAll() {
    return this.service.findAll();
  }
}
