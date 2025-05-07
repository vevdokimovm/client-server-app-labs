import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly us: UsersService) {}

  @Get()
  findAll() {
    return this.us.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.us.findOne(+id);
  }

  @Post()
  create(@Body() user: User) {
    return this.us.create(user);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() u: User) {
    return this.us.update(+id, u);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.us.remove(+id);
  }
}
