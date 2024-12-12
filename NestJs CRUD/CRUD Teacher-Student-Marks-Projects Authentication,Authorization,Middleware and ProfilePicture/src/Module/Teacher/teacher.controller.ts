import { Body, Controller, Delete, Get, Injectable, Param, Patch, Post, Put, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { TEACHERS } from './entity/Teacher.entity';
import { JwtAuthGuard } from '../auth/Guards/Jwt-auth.guard';
import { Roles } from '../auth/Guards/decorator/roles.decorator';
import { role } from '../auth/Guards/enums/role.enum';
import { RolesGuard } from '../auth/Guards/roles/roles.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('teacher')
@UseGuards(JwtAuthGuard,RolesGuard)
export class TeacherController {
    constructor(private readonly teacherService: TeacherService){}

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
    await this.teacherService.updateProfilePicture(id, filePath);

    return { message: 'Profile picture uploaded successfully', filePath };
  }

  @Get(':id/profilepicture')
  async getProfilePicture(@Param('id')id: number){
    const student = await this.teacherService.findOne(id);
    return {profilePicture: student.PROFILEPICTURE}
  }
    // @Roles(role.ADMIN,role.TEACHER)
    @Get(':id/detail')
    async getTeacherDetailById(@Param('id') id: number) {
        const data = await this.teacherService.getTeacherDetailById(id);
        return{
            success: true,
            data,
        };
    }

    // @Roles(role.ADMIN,role.TEACHER)
    @Get(':id/student')
    async getTeacherStudentDetail(@Param('id')id: number) {
        const data = await this.teacherService.getTeacherStduentDetail(id);
        return{
            success: true,
            data,
        };
    }

    // @Roles(role.ADMIN,role.TEACHER)
    @Get(':id/project')
    async getTeacherProjectDetail(@Param('id')id: number) {
        const data = await this.teacherService.getTeacherProjectDetail(id);
        return{
            success: true,
            data,
        };
    }

    // @Roles(role.ADMIN,role.TEACHER)
    @Get('alldetail')
    async getAllDetail() {
        const data = await this.teacherService.getAllDetail();
        return{
            success: true,
            data,
        };
    }

    // @Roles(role.ADMIN,role.TEACHER)
    @Get()
    findAll(){
        return this.teacherService.findAll();
    }
    
    // @Roles(role.ADMIN,role.TEACHER)
    @Get(':id')
    findOne(@Param('id') id: number){
        return this.teacherService.findOne(id);
    }
    // @Roles(role.ADMIN)
    @Post()
    create(@Body() teacher:TEACHERS){
        return this.teacherService.create(teacher)
    }
    
    // @Roles(role.ADMIN)
    @Put(':id')
    update(@Param('id') id: number, @Body() teacher: TEACHERS){
        return this.teacherService.update(id,teacher)
    }

    // @Roles(role.ADMIN)
    @Delete(':id')
    remove(@Param('id') id: number): Promise<void>{
        return this.teacherService.remove(id)
    }


}
