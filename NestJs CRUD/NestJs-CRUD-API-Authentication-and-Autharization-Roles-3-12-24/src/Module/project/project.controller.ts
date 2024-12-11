import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { JwtAuthGuard } from '../auth/Guards/Jwt-auth.guard';
import { RolesGuard } from '../auth/Guards/roles/roles.guard';
import { Roles } from '../auth/Guards/decorator/roles.decorator';
import { role } from '../auth/Guards/enums/role.enum';

@Controller('project')
@UseGuards(JwtAuthGuard,RolesGuard)
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Roles(role.ADMIN,role.TEACHER,role.STUDENT)
  @Get(':id/detail')
  async getProjectDetailById(@Param('id')id: number){
    const data = await this.projectService.getProjectDetailById(id);
    return{
      success: true,
      data,
    }
  }

  @Roles(role.ADMIN,role.TEACHER,role.STUDENT)
  @Get(':id/student')
    async getProjectStudentById(@Param('id')id: number){
        const data = await this.projectService.getProjectStudentDetail(id);
        return{
            success: true,
            data
        }
    }

    @Roles(role.ADMIN,role.TEACHER,role.STUDENT)
    @Get(':id/teacher')
    async getProjectTeacherById(@Param('id')id: number){
        const data = await this.projectService.getProjectTeacherDetail(id);
        return{
            success: true,
            data
        }
    }

    // @Get(':id/mark')
    // async getProjectMarksById(@Param('id')id: number){
    //     const data = await this.projectService.getProjectMarksDetail(id)
    //     return{
    //         success: true,
    //         data
    //     }
    // }

    @Roles(role.ADMIN,role.TEACHER,role.STUDENT)
    @Get('alldetail')
    async getProjectAllDetail(){
        const data = await this.projectService.getAllDetail()
        return{
            success: true,
            data
        }
    }

  @Roles(role.ADMIN,role.TEACHER)
  @Post()
  create(@Body() createProjectDto: CreateProjectDto) {
    return this.projectService.create(createProjectDto);
  }

  @Roles(role.ADMIN,role.TEACHER,role.STUDENT)
  @Get()
  findAll() {
    return this.projectService.findAll();
  }

  @Roles(role.ADMIN,role.TEACHER,role.STUDENT)
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.projectService.findOne(id);
  }

  @Roles(role.ADMIN,role.TEACHER)
  @Put(':id')
  update(@Param('id') id: number, @Body() updateProjectDto: UpdateProjectDto) {
    return this.projectService.update(id, updateProjectDto);
  }

  @Roles(role.ADMIN,role.TEACHER)
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.projectService.remove(id);
  }
}
