import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { MarkService } from './mark.service';
import { MARKS } from './entity/Mark.entity';

@Controller('mark')
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

    @Put(':id')
    update(@Param('id')id: number,@Body() marks: MARKS){
        return this.marksService.update(id,marks)
    }

    @Delete(':id')
    remove(@Param('id')id: number){
        return this.marksService.remove(id)
    }
}
