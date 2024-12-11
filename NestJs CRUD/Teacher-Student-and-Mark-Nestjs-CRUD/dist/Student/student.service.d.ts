import { STUDENTS } from './entity/Student.entity';
import { Repository } from 'typeorm';
import { CreateStudentDto } from './DTO/Create.StudentDto';
import { UpdateStudentDto } from './DTO/Update.studentDto';
export declare class StudentService {
    private studentRepository;
    constructor(studentRepository: Repository<STUDENTS>);
    findAll(): Promise<STUDENTS[]>;
    findOne(id: number): Promise<STUDENTS>;
    create(createStudentDto: CreateStudentDto): Promise<STUDENTS>;
    update(id: number, updateStudentDto: UpdateStudentDto): Promise<void>;
    remove(id: number): Promise<void>;
}
