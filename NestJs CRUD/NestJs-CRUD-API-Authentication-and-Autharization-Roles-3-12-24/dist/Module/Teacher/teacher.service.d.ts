import { TEACHERS } from './entity/Teacher.entity';
import { Repository } from 'typeorm';
import { CreateTeacherDto } from './DTO/Create.teacherDto';
import { UpdateTeacherDto } from './DTO/Update.teacherDto';
import { STUDENTS } from '../Student/entity/Student.entity';
import { MARKS } from '../Mark/entity/Mark.entity';
import { PROJECT } from '../project/entities/project.entity';
export declare class TeacherService {
    private teacherRepository;
    private studentRepository;
    private markRepository;
    private projectRepository;
    constructor(teacherRepository: Repository<TEACHERS>, studentRepository: Repository<STUDENTS>, markRepository: Repository<MARKS>, projectRepository: Repository<PROJECT>);
    getTeacherDetailById(id: number): Promise<any>;
    getTeacherStduentDetail(id: number): Promise<any>;
    getTeacherProjectDetail(id: number): Promise<any>;
    getAllDetail(): Promise<any>;
    findAll(): Promise<TEACHERS[]>;
    findOne(id: number): Promise<TEACHERS>;
    create(createTeacherDto: CreateTeacherDto): Promise<TEACHERS>;
    update(id: number, updateTeacherDto: UpdateTeacherDto): Promise<void>;
    remove(id: number): Promise<void>;
}
