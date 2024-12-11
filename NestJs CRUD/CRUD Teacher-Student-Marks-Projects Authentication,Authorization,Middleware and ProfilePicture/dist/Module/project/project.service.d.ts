import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { PROJECT } from './entities/project.entity';
import { Repository } from 'typeorm';
import { MARKS } from '../Mark/entity/Mark.entity';
import { TEACHERS } from '../Teacher/entity/Teacher.entity';
import { STUDENTS } from '../Student/entity/Student.entity';
export declare class ProjectService {
    private projectRepository;
    private markRepository;
    private teacherRepository;
    private studentRepository;
    constructor(projectRepository: Repository<PROJECT>, markRepository: Repository<MARKS>, teacherRepository: Repository<TEACHERS>, studentRepository: Repository<STUDENTS>);
    getProjectDetailById(id: number): Promise<any>;
    getProjectStudentDetail(id: number): Promise<any>;
    getProjectTeacherDetail(id: number): Promise<any>;
    getAllDetail(): Promise<any>;
    create(createProjectDto: CreateProjectDto): Promise<PROJECT>;
    findAll(): Promise<PROJECT[]>;
    findOne(id: number): Promise<PROJECT>;
    update(id: number, updateProjectDto: UpdateProjectDto): Promise<void>;
    remove(id: number): Promise<void>;
}
