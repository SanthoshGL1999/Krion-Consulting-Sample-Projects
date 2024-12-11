import { StudentService } from './student.service';
import { CreateStudentDto } from './DTO/Create.StudentDto';
import { UpdateStudentDto } from './DTO/Update.studentDto';
export declare class StudentController {
    private readonly studentService;
    constructor(studentService: StudentService);
    getStudentDetails(id: number): Promise<{
        success: boolean;
        data: any;
    }>;
    getTeacherDetails(id: number): Promise<{
        success: boolean;
        data: any;
    }>;
    getMarkDetails(id: number): Promise<{
        success: boolean;
        data: any;
    }>;
    getProjectDetail(id: number): Promise<{
        success: boolean;
        data: any;
    }>;
    getAllDetails(): Promise<{
        success: boolean;
        data: any;
    }>;
    findAll(): Promise<import("./entity/Student.entity").STUDENTS[]>;
    findOne(id: number): Promise<import("./entity/Student.entity").STUDENTS>;
    create(createStudentDto: CreateStudentDto): Promise<import("./entity/Student.entity").STUDENTS>;
    update(id: number, updateStudentDto: UpdateStudentDto): Promise<void>;
    remove(id: number): Promise<void>;
}
