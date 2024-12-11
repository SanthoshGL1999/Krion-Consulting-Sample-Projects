import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MARKS } from './entity/Mark.entity';
import { Repository } from 'typeorm';
import { CreateMarksDto } from './DTO/Create.markDto';
import { UpdateMarksDto } from './DTO/Update.markDto';

@Injectable()
export class MarkService {
    findMarksByStudentId(id: any) {
        throw new Error('Method not implemented.');
    }

    constructor(@InjectRepository(MARKS)
    private markRepository: Repository<MARKS>,
){}

    findAll(): Promise<MARKS[]>{
        return this.markRepository.find()
    }

    findOne(id: number): Promise<MARKS>{
        return this.markRepository.findOneBy({id})
    }

    create(createMarksDto: CreateMarksDto): Promise<MARKS>{
        return this.markRepository.save(createMarksDto)
    }

    async update(id: number,updateMarksDto: UpdateMarksDto): Promise<void>{
        await this.markRepository.update(id,updateMarksDto)
    }

    async remove(id: number): Promise<void>{
        await this.markRepository.delete(id)
    }
}
