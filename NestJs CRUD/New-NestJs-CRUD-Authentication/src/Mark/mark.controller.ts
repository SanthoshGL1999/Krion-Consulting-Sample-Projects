import { Body, Controller, Delete, Get, Param, Post, Put, Request, UseGuards} from '@nestjs/common';
import { MarkService } from './mark.service';
import { MARKS } from './entity/Mark.entity';
import { JwtAuthGuard } from 'src/auth/Jwt-auth.guard';


@Controller('mark')
@UseGuards(JwtAuthGuard)
export class MarkController {
    constructor(private readonly marksService: MarkService){}

    @Get()
    findAll(){
        return this.marksService.findAll()
    }

    @Get(':id')
    findOne(@Param('id')id: number){
        return this.marksService.findOne(id)
    }

    @Post()
    create(@Body() marks: MARKS){
        return this.marksService.create(marks)
    }

   
    @Get('my-marks')
    async getMyMarks(@Request() req) {
    return this.marksService.findMarksByStudentId(req.user.id);
    }

    @Put(':id')
    update(@Param('id')id: number,@Body() marks: MARKS){
        return this.marksService.update(id,marks)
    }

    @Delete(':id')
    remove(@Param('id')id: number){
        return this.marksService.remove(id)
    }
}
