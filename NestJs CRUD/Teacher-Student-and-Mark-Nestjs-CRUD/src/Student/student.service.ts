import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { STUDENTS } from './entity/Student.entity';
import { Repository } from 'typeorm';
import { CreateStudentDto } from './DTO/Create.StudentDto';
import { UpdateStudentDto } from './DTO/Update.studentDto';

@Injectable()
export class StudentService {
    constructor(@InjectRepository(STUDENTS)
                private studentRepository: Repository<STUDENTS>,
                ){}
    
    findAll():Promise<STUDENTS[]>{
        return this.studentRepository.find();
    }

    findOne(id: number):Promise<STUDENTS>{
        return this.studentRepository.findOneBy({id});
    }

    create(createStudentDto: CreateStudentDto): Promise<STUDENTS>{
        return this.studentRepository.save(createStudentDto);
    }

    async update(id: number,updateStudentDto: UpdateStudentDto): Promise<void>{
        await this.studentRepository.update(id,updateStudentDto);
    }
    
    async remove(id: number): Promise<void>{
        await this.studentRepository.delete(id)
    }
}
