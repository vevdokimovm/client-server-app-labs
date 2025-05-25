import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Affiliation } from './entities/affiliation.entity';

@Injectable()
export class AffiliationsService {
  constructor(
    @InjectRepository(Affiliation)
    private affiliationRepo: Repository<Affiliation>,
  ) {}

  findAll(): Promise<Affiliation[]> {
    return this.affiliationRepo.find();
  }
}
