import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

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