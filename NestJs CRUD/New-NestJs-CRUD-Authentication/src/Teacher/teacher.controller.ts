import { Body, Controller, Delete, Get, Injectable, Param, Post, Put, UseGuards } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { TEACHERS } from './entity/Teacher.entity';
import { JwtAuthGuard } from 'src/auth/Jwt-auth.guard';



@Injectable()
@Controller('teacher')
@UseGuards(JwtAuthGuard)
export class TeacherController {
    constructor(private readonly teacherService: TeacherService){}

    @Get()
    findAll(){
        return this.teacherService.findAll();
    }
    
   
    @Get(':id')
    findOne(@Param('id') id: number){
        return this.teacherService.findOne(id);
    }

    
    @Post()
    create(@Body() teacher:TEACHERS){
        return this.teacherService.create(teacher)
    }
    
    @Put(':id')
    update(@Param('id') id: number, @Body() teacher: TEACHERS){
        return this.teacherService.update(id,teacher)
    }

    @Delete(':id')
    remove(@Param('id') id: number): Promise<void>{
        return this.teacherService.remove(id)
    }


}
