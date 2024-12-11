import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Request, UseGuards } from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './DTO/Create.StudentDto';
import { UpdateStudentDto } from './DTO/Update.studentDto';
import { JwtAuthGuard } from '../auth/Guards/Jwt-auth.guard';
import { RolesGuard } from '../auth/Guards/roles/roles.guard';
import { Roles } from '../auth/Guards/decorator/roles.decorator';
import { role } from '../auth/Guards/enums/role.enum';

@Controller('student')
@UseGuards(JwtAuthGuard,RolesGuard)
export class StudentController {
    constructor(private readonly studentService: StudentService){}

    @Roles(role.ADMIN,role.TEACHER,role.STUDENT)
    @Get(':id/detail')
    async getStudentDetails(@Param('id') id: number) {
        const data = await this.studentService.getStudentDetailsById(id); // Convert string to number
        return {
            success: true,
            data,
        };
    }

    @Roles(role.ADMIN,role.TEACHER,role.STUDENT)
    @Get(':id/teacher')
    async getTeacherDetails(@Param('id')id: number) {
        const data = await this.studentService.getStudentTeacherDetails(id);
        return {
            success: true,
            data,
        };
    }

    @Roles(role.STUDENT,role.ADMIN,role.TEACHER)
    @Get(':id/mark')
    async getMarkDetails(@Param('id')id: number) {
        const data = await this.studentService.getStudentMarkDetails(id);
        return {
            success: true,
            data,
        };
    }

    @Roles(role.ADMIN,role.TEACHER,role.STUDENT)
    @Get(':id/project')
    async getProjectDetail(@Param('id')id: number){
        const data = await this.studentService.getStudentProjectDetail(id);
        return{
            success: true,
            data,
        };
    }

    @Roles(role.ADMIN,role.TEACHER,role.STUDENT)
    @Get('allDetail')
    async getAllDetails() {
        const data = await this.studentService.getAllDetails();
        return {
            success: true,
            data,
        };
    }

    @Roles(role.ADMIN,role.TEACHER,role.STUDENT)
    @Get()
    findAll(){
        return this.studentService.findAll()
    }

    @Roles(role.ADMIN,role.TEACHER,role.STUDENT)
    @Get(':id')
    findOne(@Param('id')id: number){
        return this.studentService.findOne(id)
    }

    @Roles(role.ADMIN,role.TEACHER)
    @Post()
    create(@Body() createStudentDto: CreateStudentDto){
        return this.studentService.create(createStudentDto)
    }

    @Roles(role.ADMIN,role.TEACHER)
    @Put(':id')
    update(@Param('id') id: number,@Body() updateStudentDto: UpdateStudentDto){
        return this.studentService.update(id,updateStudentDto)
    }

    @Roles(role.ADMIN,role.TEACHER)
    @Delete(':id')
    remove(@Param('id') id: number){
        return this.studentService.remove(id)
    }
}
