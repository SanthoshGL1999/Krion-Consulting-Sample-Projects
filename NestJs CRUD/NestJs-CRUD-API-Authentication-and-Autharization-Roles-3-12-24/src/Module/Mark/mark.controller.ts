import { Body, Controller, Delete, Get, Param, Post, Put, Request, UseGuards} from '@nestjs/common';
import { MarkService } from './mark.service';
import { MARKS } from './entity/Mark.entity';
import { JwtAuthGuard } from '../auth/Guards/Jwt-auth.guard';
import { RolesGuard } from '../auth/Guards/roles/roles.guard';
import { role } from '../auth/Guards/enums/role.enum';
import { Roles } from '../auth/Guards/decorator/roles.decorator';
import { CreateMarksDto } from './DTO/Create.markDto';
import { UpdateMarksDto } from './DTO/Update.markDto';

@Controller('mark')
@UseGuards(JwtAuthGuard,RolesGuard)
export class MarkController {
    constructor(private readonly marksService: MarkService){}

    @Roles(role.ADMIN,role.TEACHER)
    @Post('/create')
    async createMarks(@Body() createMarksDto: CreateMarksDto){
        return this.marksService.createMarks(createMarksDto);
    }

    @Roles(role.ADMIN,role.TEACHER)
    @Put(':id/Update')
    async updateMarks(@Param('id')id: number,@Body() updateMarksDto: UpdateMarksDto){
        return this.marksService.updateMarks(id,updateMarksDto);
    }

    @Roles(role.ADMIN,role.TEACHER,role.STUDENT)
    @Get(':id/detail')
    async getMarkDetailById(@Param('id')id: number){
        const data = await this.marksService.getMarkDetailById(id)
        return{
            success: true,
            data
        }
    }
    
    @Roles(role.ADMIN,role.TEACHER,role.STUDENT)
    @Get(':id/student')
    async getMarkStudentById(@Param('id')id: number){
        const data = await this.marksService.getMarkStudentDetail(id)
        return{
            success: true,
            data
        }
    }

    @Roles(role.ADMIN,role.TEACHER,role.STUDENT)
    @Get(':id/teacher')
    async getMarkTeacherById(@Param('id')id: number){
        const data = await this.marksService.getMarkTeacherDetail(id)
        return{
            success: true,
            data
        }
    }

    // @Get(':id/project')
    // async getMarkProjectById(@Param('id')id: number){
    //     const data = await this.marksService.getMarkProjectDetail(id)
    //     return{
    //         success: true,
    //         data
    //     }
    // }

    @Roles(role.ADMIN,role.TEACHER,role.STUDENT)
    @Get('alldetail')
    async getMarkAllDetail(){
        const data = await this.marksService.getAllDetail()
        return{
            success: true,
            data
        }
    }

    @Roles(role.ADMIN,role.TEACHER,role.STUDENT)
    @Get()
    findAll(){
        return this.marksService.findAll()
    }

    @Roles(role.ADMIN,role.TEACHER,role.STUDENT)
    @Get(':id')
    findOne(@Param('id')id: number){
        return this.marksService.findOne(id)
    }

    @Roles(role.ADMIN,role.TEACHER)
    @Post()
    create(@Body() marks: MARKS){
        return this.marksService.create(marks)
    }

    @Roles(role.ADMIN,role.TEACHER)
    @Put(':id')
    update(@Param('id')id: number,@Body() marks: MARKS){
        return this.marksService.update(id,marks)
    }

    @Roles(role.ADMIN,role.TEACHER)
    @Delete(':id')
    remove(@Param('id')id: number){
        return this.marksService.remove(id)
    }
}
