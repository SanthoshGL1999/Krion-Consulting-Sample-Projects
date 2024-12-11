import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TEACHERS } from './entity/Teacher.entity';
import { Repository } from 'typeorm';
import { CreateTeacherDto } from './DTO/Create.teacherDto';
import { UpdateTeacherDto } from './DTO/Update.teacherDto';
import { STUDENTS } from '../Student/entity/Student.entity';
import { MARKS } from '../Mark/entity/Mark.entity';
import { PROJECT } from '../project/entities/project.entity';

@Injectable()
export class TeacherService {
    constructor(@InjectRepository(TEACHERS)
                private teacherRepository: Repository<TEACHERS>,
                @InjectRepository(STUDENTS)
                private studentRepository: Repository<STUDENTS>,
                @InjectRepository(MARKS) 
                private markRepository: Repository<MARKS>,
                @InjectRepository(PROJECT) 
                private projectRepository: Repository<PROJECT>,
){}


    async getTeacherDetailById(id: number): Promise<any> {
        const teacher = await this.teacherRepository.findOne({where: { id }});
        if(!teacher){
            throw new NotFoundException(`teacher with ID ${id} not found`);
        }
        const student = await this.studentRepository.find({where: {CLASS_TEACHER: teacher.id}})
        
        // const marks = teacher.id
        // ? await this.markRepository.findOne({where: {id: teacher.id}})
        // : null;
        const projects = teacher.id
        ? await this.projectRepository.findOne({where: {id: teacher.id}})
        : null;
        return{
            teacher: {
                        id: teacher.id,
                        name: teacher.NAME,
                    },

                    student: student.map(student => 
                        ({
                            id: student.id,
                            name: student.NAME,
                        })),
                        
                    // mark: marks
                    // ? {
                    //         id: marks.id,
                    //         tamil: marks.TAMIL,
                    //         english: marks.ENGLISH,
                    //         maths: marks.MATHS,
                    //         science: marks.SCIENCE,
                    //         social_science: marks.SOCIAL_SCIENCE,
                    //     }
                    //     :null,
                    project: projects
                        ?{
                            id: projects.id,
                            title: projects.TITLE,
                            project_subject: projects.PROJECT_SUBJECT,
                            project_mark: projects.PROJECT_MARKS,
                        }
                        :null,
        }; 
    }

    async getTeacherStduentDetail(id: number): Promise<any> {
        const teacher = await this.teacherRepository.findOne({where: { id }})
        if(!teacher){
            throw new NotFoundException(`teacher with ID ${id} not found`);
        }
        const student = teacher.id
        ? await this.studentRepository.find({where:{CLASS_TEACHER: teacher.id}})
        : null;
        return{
            ...teacher,
            student: student.map(student=>({
                id: student.CLASS_TEACHER,
                name: student.NAME,
            })),
        }
    }

    // async getTeacherMarkDetail(id: number): Promise<any> {
    //     const teacher = await this.teacherRepository.findOne({where: { id }})
    //     if(!teacher){
    //         throw new NotFoundException(`teacher with ID ${id} not found`);
    //     }
    //     const marks = teacher.id
    //     ? await this.markRepository.findOne({where:{id: teacher.id}})
    //     : null;
    //     return{
    //         ...teacher,
    //         mark: marks
    //         ? {
    //             id: marks.id,
    //             tamil: marks.TAMIL,
    //             english: marks.ENGLISH,
    //             maths: marks.MATHS,
    //             science: marks.SCIENCE,
    //             social_science: marks.SOCIAL_SCIENCE,
    //           }
    //           : null
    //     };
        
    // }

    async getTeacherProjectDetail(id: number): Promise<any> {
        const teacher = await this.teacherRepository.findOne({where: { id }})
        if(!teacher){
            throw new NotFoundException(`teacher with ID ${id} not found`);
        }
        const projects = teacher.id
        ? await this.projectRepository.findOne({where:{id: teacher.id}})
        : null;
        return{
            ...teacher,
            project: projects
            ? {
                id: projects.id,
                title: projects.TITLE,
                project_subject: projects.PROJECT_SUBJECT,
                project_mark: projects.PROJECT_MARKS,
              }
              : null
        };
        
    }

    async getAllDetail(): Promise<any>{
        const teachers = await this.teacherRepository.find();
        const students = await this.studentRepository.find();
        const marks = await this.markRepository.find();
        const projects = await this.projectRepository.find();
        const combinedData = teachers.map((teachers) => {
            const Assignstudent = students.filter(student => student.CLASS_TEACHER === teachers.id);
            const studentData = Assignstudent.map(student =>({
                id: student.id,
                name: student.NAME,
                project : projects.find((p) => p.id === student.id),
            }));
            // const mark = marks.find((m) => m.id === teachers.id);
            return {
                ...teachers,
                student:studentData,
                // mark: mark ? { id: mark.id, tamil: mark.TAMIL, english: mark.ENGLISH, maths: mark.MATHS, science: mark.SCIENCE, social_science: mark.SOCIAL_SCIENCE } : null,
                // project: project ? { id: project.id, title: project.TITLE, project_subject: project.PROJECT_SUBJECT, project_mark: project.PROJECT_MARKS } : null,
            }
        });

        return combinedData;
    }

    findAll(): Promise<TEACHERS[]>{
        return this.teacherRepository.find()
    }
    
    findOne(id: number): Promise<TEACHERS>{
        return this.teacherRepository.findOneBy({id})
    }

    create(createTeacherDto: CreateTeacherDto): Promise<TEACHERS>{
        return this.teacherRepository.save(createTeacherDto)
    }

    async update(id: number,updateTeacherDto: UpdateTeacherDto): Promise<void>{
        await this.teacherRepository.update(id,updateTeacherDto)
    }

    async remove(id: number): Promise<void>{
        await this.teacherRepository.delete(id)
        
    }
}
