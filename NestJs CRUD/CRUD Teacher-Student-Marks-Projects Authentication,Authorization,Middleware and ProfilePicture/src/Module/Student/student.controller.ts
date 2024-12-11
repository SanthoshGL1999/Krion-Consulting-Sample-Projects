import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, Put, Request, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './DTO/Create.StudentDto';
import { UpdateStudentDto } from './DTO/Update.studentDto';
import { JwtAuthGuard } from '../auth/Guards/Jwt-auth.guard';
import { RolesGuard } from '../auth/Guards/roles/roles.guard';
import { Roles } from '../auth/Guards/decorator/roles.decorator';
import { role } from '../auth/Guards/enums/role.enum';
import { FileInterceptor } from '@nestjs/platform-express';
import { extname } from 'path';
import { diskStorage } from  'multer';

@Controller('student')
// @UseGuards(JwtAuthGuard,RolesGuard)
export class StudentController {
    constructor(private readonly studentService: StudentService){}

    @Patch(':id/upload')
    @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './Uploads/ProfilePicture',
        filename: (req, file, callback) => {
          const fileExtName = extname(file.originalname);
          const randomName = Array(16)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          callback(null, `${randomName}${fileExtName}`);
        },
      }),
    }),
  )
  async uploadProfilePicture(@Param('id') id: number, @UploadedFile() file: Express.Multer.File) {
    // Update the student's profilePicture field in the database
    // Assuming you have a service for handling updates
    console.log(file);
    const filePath = `Upload/${file.filename}`;
    await this.studentService.updateProfilePicture(id, filePath);

    return { message: 'Profile picture uploaded successfully', filePath };
  }

  @Get(':id/profilepicture')
  async getProfilePicture(@Param('id')id: number){
    const student = await this.studentService.findOne(id);
    return {profilePicture: student.PROFILEPICTURE}
  }

    // @Roles(role.ADMIN,role.TEACHER,role.STUDENT)
    @Get(':id/detail')
    async getStudentDetails(@Param('id') id: number) {
        const data = await this.studentService.getStudentDetailsById(id); // Convert string to number
        return {
            success: true,
            data,
        };
    }

    // @Roles(role.ADMIN,role.TEACHER,role.STUDENT)
    @Get(':id/teacher')
    async getTeacherDetails(@Param('id')id: number) {
        const data = await this.studentService.getStudentTeacherDetails(id);
        return {
            success: true,
            data,
        };
    }

    // @Roles(role.STUDENT,role.ADMIN,role.TEACHER)
    @Get(':id/mark')
    async getMarkDetails(@Param('id')id: number) {
        const data = await this.studentService.getStudentMarkDetails(id);
        return {
            success: true,
            data,
        };
    }

    // @Roles(role.ADMIN,role.TEACHER,role.STUDENT)
    @Get(':id/project')
    async getProjectDetail(@Param('id')id: number){
        const data = await this.studentService.getStudentProjectDetail(id);
        return{
            success: true,
            data,
        };
    }

    // @Roles(role.ADMIN,role.TEACHER,role.STUDENT)
    @Get('allDetail')
    async getAllDetails() {
        const data = await this.studentService.getAllDetails();
        return {
            success: true,
            data,
        };
    }

    // @Roles(role.ADMIN,role.TEACHER,role.STUDENT)
    @Get()
    findAll(){
        return this.studentService.findAll()
    }

    // @Roles(role.ADMIN,role.TEACHER,role.STUDENT)
    @Get(':id')
    findOne(@Param('id')id: number){
        return this.studentService.findOne(id)
    }

    // @Roles(role.ADMIN,role.TEACHER)
    @Post()
    create(@Body() createStudentDto: CreateStudentDto){
        return this.studentService.create(createStudentDto)
    }

    // @Roles(role.ADMIN,role.TEACHER)
    @Put(':id')
    update(@Param('id') id: number,@Body() updateStudentDto: UpdateStudentDto){
        return this.studentService.update(id,updateStudentDto)
    }

    // @Roles(role.ADMIN,role.TEACHER)
    @Delete(':id')
    remove(@Param('id') id: number){
        return this.studentService.remove(id)
    }
}
