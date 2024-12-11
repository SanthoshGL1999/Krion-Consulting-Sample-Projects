import { STUDENTS } from './entity/Student.entity';
import { Repository } from 'typeorm';
import { CreateStudentDto } from './DTO/Create.StudentDto';
import { UpdateStudentDto } from './DTO/Update.studentDto';
import { TEACHERS } from '../Teacher/entity/Teacher.entity';
import { MARKS } from '../Mark/entity/Mark.entity';
import { PROJECT } from '../project/entities/project.entity';
export declare class StudentService {
    private studentRepository;
    private teacherRepository;
    private markRepository;
    private projectRepository;
    constructor(studentRepository: Repository<STUDENTS>, teacherRepository: Repository<TEACHERS>, markRepository: Repository<MARKS>, projectRepository: Repository<PROJECT>);
    getStudentDetailsById(id: number): Promise<any>;
    getStudentTeacherDetails(id: number): Promise<any>;
    getStudentMarkDetails(id: number): Promise<any>;
    getStudentProjectDetail(id: number): Promise<any>;
    getAllDetails(): Promise<any>;
    findAll(): Promise<STUDENTS[]>;
    findOne(id: number): Promise<STUDENTS>;
    create(createStudentDto: CreateStudentDto): Promise<STUDENTS>;
    update(id: number, updateStudentDto: UpdateStudentDto): Promise<void>;
    remove(id: number): Promise<void>;
}
