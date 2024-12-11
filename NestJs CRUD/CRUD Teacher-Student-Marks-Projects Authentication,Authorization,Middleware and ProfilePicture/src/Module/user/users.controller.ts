import { Controller, Get, Post, Body, Put, Param, Delete, NotFoundException } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(
    private readonly userService: UsersService,
  ) {}

  @Get()
  async findAll(){
    try{
      return await this.userService.findAll();
    }catch(error){
      throw new error('Unable to fetch users')
    }
  }
 
  @Get(':id')
  async findOne(@Param('id') id: number){
    try{
      const user= await this.userService.findOne(id);
      if(!user){
        throw new NotFoundException(`User with ID ${id} not found`);
      }
      return user;
    }catch(error){
      throw new error('Unable to fetch users by id');
    }
  }

}