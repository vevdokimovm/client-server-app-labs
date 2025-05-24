import { Injectable } from '@nestjs/common';
import { DatasourceService } from '../datasource/datasource.service';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(private ds: DatasourceService) {}

  findAll() {
    return this.ds.getUsers();
  }

  findOne(id: number) {
    return this.ds.getUsers().find(u => u.id === id);
  }

  create(user: User) {
    this.ds.getUsers().push(user);
    return user;
  }

  update(id: number, updated: User) {
    const index = this.ds.getUsers().findIndex(u => u.id === id);
    this.ds.getUsers()[index] = updated;
    return updated;
  }

  remove(id: number) {
    const index = this.ds.getUsers().findIndex(u => u.id === id);
    this.ds.getUsers().splice(index, 1);
    return { success: true };
  }
}
