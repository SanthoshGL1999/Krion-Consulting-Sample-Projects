import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './DTO/Create.StudentDto';
import { UpdateStudentDto } from './DTO/Update.studentDto';

@Controller('student')
export class StudentController {
    constructor(private readonly studentService: StudentService){}

    @Get()
    findAll(){
        return this.studentService.findAll()
    }

    @Get(':id')
    findOne(@Param('id')id: number){
        return this.studentService.findOne(id)
    }

    @Post()
    create(@Body() createStudentDto: CreateStudentDto){
        return this.studentService.create(createStudentDto)
    }

    @Put(':id')
    update(@Param('id') id: number,@Body() updateStudentDto: UpdateStudentDto){
        return this.studentService.update(id,updateStudentDto)
    }

    @Delete(':id')
    remove(@Param('id') id: number){
        return this.studentService.remove(id)
    }
}
