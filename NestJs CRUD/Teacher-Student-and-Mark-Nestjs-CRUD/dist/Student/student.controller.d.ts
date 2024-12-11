import { StudentService } from './student.service';
import { CreateStudentDto } from './DTO/Create.StudentDto';
import { UpdateStudentDto } from './DTO/Update.studentDto';
export declare class StudentController {
    private readonly studentService;
    constructor(studentService: StudentService);
    findAll(): Promise<import("./entity/Student.entity").STUDENTS[]>;
    findOne(id: number): Promise<import("./entity/Student.entity").STUDENTS>;
    create(createStudentDto: CreateStudentDto): Promise<import("./entity/Student.entity").STUDENTS>;
    update(id: number, updateStudentDto: UpdateStudentDto): Promise<void>;
    remove(id: number): Promise<void>;
}
