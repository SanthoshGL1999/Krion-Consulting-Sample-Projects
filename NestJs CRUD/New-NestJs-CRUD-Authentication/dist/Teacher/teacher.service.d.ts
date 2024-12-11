import { TEACHERS } from './entity/Teacher.entity';
import { Repository } from 'typeorm';
import { CreateTeacherDto } from './DTO/Create.teacherDto';
import { UpdateTeacherDto } from './DTO/Update.teacherDto';
export declare class TeacherService {
    private teacherReopsitory;
    constructor(teacherReopsitory: Repository<TEACHERS>);
    findAll(): Promise<TEACHERS[]>;
    findOne(id: number): Promise<TEACHERS>;
    create(createTeacherDto: CreateTeacherDto): Promise<TEACHERS>;
    update(id: number, updateTeacherDto: UpdateTeacherDto): Promise<void>;
    remove(id: number): Promise<void>;
}
