import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { DatasourceService } from 'src/datasource/datasource.service';

@Injectable()
export class UsersService {
  constructor(private readonly ds: DatasourceService) {}

  findAll(): User[] {
    return this.ds.getUsers();
  }

  findOne(id: number): User {
    return this.ds.getUsers().find(u => u.id === id);
  }

  create(user: User): User {
    this.ds.getUsers().push(user);
    return user;
  }

  update(id: number, updated: User): User {
    const index = this.ds.getUsers().findIndex(u => u.id === id);
    this.ds.getUsers()[index] = updated;
    return updated;
  }

  remove(id: number): number {
    const index = this.ds.getUsers().findIndex(u => u.id === id);
    this.ds.getUsers().splice(index, 1);
    return 200;
  }
}
