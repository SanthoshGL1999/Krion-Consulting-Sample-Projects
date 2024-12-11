import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TEACHERS } from './entity/Teacher.entity';
import { Repository } from 'typeorm';
import { CreateTeacherDto } from './DTO/Create.teacherDto';
import { UpdateTeacherDto } from './DTO/Update.teacherDto';

@Injectable()
export class TeacherService {
    constructor(@InjectRepository(TEACHERS)
    private teacherReopsitory: Repository<TEACHERS>,
){}

    findAll(): Promise<TEACHERS[]>{
        return this.teacherReopsitory.find()
    }
    
    findOne(id: number): Promise<TEACHERS>{
        return this.teacherReopsitory.findOneBy({id})
    }

    create(createTeacherDto: CreateTeacherDto): Promise<TEACHERS>{
        return this.teacherReopsitory.save(createTeacherDto)
    }

    async update(id: number,updateTeacherDto: UpdateTeacherDto): Promise<void>{
        await this.teacherReopsitory.update(id,updateTeacherDto)
    }

    async remove(id: number): Promise<void>{
        await this.teacherReopsitory.delete(id)
        
    }
}
