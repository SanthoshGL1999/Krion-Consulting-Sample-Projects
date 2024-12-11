import { TeacherService } from './teacher.service';
import { TEACHERS } from './entity/Teacher.entity';
export declare class TeacherController {
    private readonly teacherService;
    constructor(teacherService: TeacherService);
    getTeacherDetailById(id: number): Promise<{
        success: boolean;
        data: any;
    }>;
    getTeacherStudentDetail(id: number): Promise<{
        success: boolean;
        data: any;
    }>;
    getTeacherProjectDetail(id: number): Promise<{
        success: boolean;
        data: any;
    }>;
    getAllDetail(): Promise<{
        success: boolean;
        data: any;
    }>;
    findAll(): Promise<TEACHERS[]>;
    findOne(id: number): Promise<TEACHERS>;
    create(teacher: TEACHERS): Promise<TEACHERS>;
    update(id: number, teacher: TEACHERS): Promise<void>;
    remove(id: number): Promise<void>;
}
