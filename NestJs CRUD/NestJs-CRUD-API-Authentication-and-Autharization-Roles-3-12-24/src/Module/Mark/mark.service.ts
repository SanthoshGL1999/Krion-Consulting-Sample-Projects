import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MARKS } from './entity/Mark.entity';
import { Repository } from 'typeorm';
import { CreateMarksDto } from './DTO/Create.markDto';
import { UpdateMarksDto } from './DTO/Update.markDto';
import { TEACHERS } from '../Teacher/entity/Teacher.entity';
import { STUDENTS } from '../Student/entity/Student.entity';
import { PROJECT } from '../project/entities/project.entity';
import { error } from 'console';

@Injectable()
export class MarkService {
    constructor(@InjectRepository(MARKS)
                private markRepository: Repository<MARKS>,
                @InjectRepository(TEACHERS)
                private teacherRepository: Repository<TEACHERS>,
                @InjectRepository(STUDENTS)
                private studentRepository: Repository<STUDENTS>,
                @InjectRepository(PROJECT) 
                private projectRepository: Repository<PROJECT>,
){}

    private calculateGrade(totalMarks: number): string{
        const average = totalMarks/5;

        if(average>=90) return 'A+';
        if(average>=80) return 'A';
        if(average>=70) return 'B';
        if(average>=60) return 'C';
        if(average>=50) return 'D';
        return 'F';
    }

    async createMarks(createMarksDto: CreateMarksDto): Promise<MARKS>{
        const {STUDENT_ID,TAMIL,ENGLISH,MATHS,SCIENCE,SOCIAL_SCIENCE} = createMarksDto;

        const totalMarks = TAMIL+ENGLISH+MATHS+SCIENCE+SOCIAL_SCIENCE;

        const GRADE = this.calculateGrade(totalMarks);

        const marks = this.markRepository.create({
            STUDENT_ID,
            TAMIL,
            ENGLISH,
            MATHS,
            SCIENCE,
            SOCIAL_SCIENCE,
            GRADE,
        });
        return this.markRepository.save(marks);
    }

    async updateMarks(id: number,updateMarksDto: UpdateMarksDto): Promise<MARKS>{
        
        const {STUDENT_ID,TAMIL,ENGLISH,MATHS,SCIENCE,SOCIAL_SCIENCE} = updateMarksDto;

        const totalMarks = TAMIL+ENGLISH+MATHS+SCIENCE+SOCIAL_SCIENCE;

        const GRADE = this.calculateGrade(totalMarks);

  

        // // (await marks).TAMIL = TAMIL,
        // (await marks).ENGLISH = ENGLISH,
        // (await marks).MATHS = MATHS,
        // (await marks).SCIENCE = SCIENCE,
        // (await marks).SOCIAL_SCIENCE = SOCIAL_SCIENCE,
        // (await marks).GRADE = GRADE,

        await this.markRepository.update(id,{
            STUDENT_ID,
            TAMIL,
            ENGLISH,
            MATHS,
            SCIENCE,
            SOCIAL_SCIENCE,
            GRADE,
        })

        return await this.markRepository.findOneBy({id})
    }

    async getMarkDetailById(id: number): Promise<any>{
        const marks = await this.markRepository.findOne({where: { id }});
        if(!marks){
            throw new NotFoundException(`Marks with ID ${id} not found`);
        }
        const student = marks.id
        ? await this.studentRepository.findOne({where: { id: marks.id }})
        : null;
        const teacher = student.CLASS_TEACHER
        ? await this.teacherRepository.findOne({where: { id: student.CLASS_TEACHER }})
        : null;
        const projects = marks.id
        ? await this.projectRepository.findOne({where: { id: marks.id }})
        : null;
        return{
            marks: {
                    id: marks.id,
                    tamil: marks.TAMIL,
                    english: marks.ENGLISH,
                    maths: marks.MATHS,
                    science: marks.SCIENCE,
                    social_science: marks.SOCIAL_SCIENCE,
                    grade: marks.GRADE,
                    },
            student: student 
                    ? {
                        id: student.id,
                        name: student.NAME,
                    }
                    : null,
            teacher: teacher 
                    ? {
                        id: teacher.id,
                        name: teacher.NAME,
                    }
                    : null,
            // project: projects
            //         ?{
            //             id: projects.id,
            //             title: projects.TITLE,
            //             project_subject: projects.PROJECT_SUBJECT,
            //             project_mark: projects.PROJECT_MARKS,
            //         }
            //         :null,

        }
    }

    async getMarkStudentDetail(id: number): Promise<any> {
        const marks = await this.markRepository.findOne({where: { id }});
        if(!marks){
            throw new NotFoundException(`mark with ID ${id} not found`);
        }
        const student = marks.id
        ? await this.studentRepository.findOne({where: {id: marks.id}})
        : null;
        return{
            ...marks,
            student: student
            ? {
                id: student.id,
                name: student.NAME,
            }
            : null,
        }
    }

    async getMarkTeacherDetail(id: number): Promise<any> {
        const student = await this.studentRepository.findOne({where: { id }})
        const marks = await this.markRepository.findOne({where: { id }});
        if(!marks){
            throw new NotFoundException(`mark with ID ${id} not found`);
        }
        const teacher = student.CLASS_TEACHER
        ? await this.teacherRepository.findOne({where: {id: student.CLASS_TEACHER}})
        : null;
        return{
            ...marks,
            teacher: teacher
            ? { id: teacher.id, name: teacher.NAME }
            : null,
            }
        }

    // async getMarkProjectDetail(id: number): Promise<any> {
    //     const marks = await this.markRepository.findOne({where: { id }});
    //     if(!marks){
    //         throw new NotFoundException(`mark with ID ${id} not found`);
    //     }
    //     const projects = marks.id
    //         ? await this.projectRepository.findOne({where: {id: marks.id}})
    //         : null;
    //         return{
    //             ...marks,
    //             project: projects
    //             ? { id: projects.id,
    //                 title: projects.TITLE,
    //                 project_subject: projects.PROJECT_SUBJECT,
    //                 project_mark: projects.PROJECT_MARKS, 
    //             }
    //             : null,
    //         }
    // }

    async getAllDetail(): Promise<any>{
        const teachers = await this.teacherRepository.find();
        const students = await this.studentRepository.find();
        const marks = await this.markRepository.find();
        const projects = await this.projectRepository.find();
        const combinedData = marks.map((marks) => {
            const student = students.find((s) => s.id === marks.id);
            const teacher = teachers.find((t) => t.id === student.CLASS_TEACHER);
            // const project = projects.find((p) => p.id === marks.id);
            return {
                ...marks,
                student: student ? { id: student.id, name: student.NAME } : null,
                teacher: teacher ? { id: teacher.id, name: teacher.NAME } : null,
                // project: project ? { id: project.id, title: project.TITLE, project_subject: project.PROJECT_SUBJECT, project_mark: project.PROJECT_MARKS } : null,
            }
        });

        return combinedData;
    }

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
