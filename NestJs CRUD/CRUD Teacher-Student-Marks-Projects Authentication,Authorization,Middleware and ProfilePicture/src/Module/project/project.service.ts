import { Injectable, NotFoundException, UseGuards } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PROJECT } from './entities/project.entity';
import { In, Repository } from 'typeorm';
import { MARKS } from '../Mark/entity/Mark.entity';
import { TEACHERS } from '../Teacher/entity/Teacher.entity';
import { STUDENTS } from '../Student/entity/Student.entity';
import { ProjectResponseDto } from './dto/response-projectDto';


@Injectable()
export class ProjectService {
  constructor(@InjectRepository(PROJECT)
              private projectRepository: Repository<PROJECT>,
              @InjectRepository(MARKS)
              private markRepository: Repository<MARKS>,
              @InjectRepository(TEACHERS)
              private teacherRepository: Repository<TEACHERS>,
              @InjectRepository(STUDENTS)
              private studentRepository: Repository<STUDENTS>,
){}

  async getProjectDetailById(id: number): Promise<any> {
    const projects = await this.projectRepository.findOne({where: { id }});
    if(!projects){
      throw new NotFoundException(`project with ID ${id} not found`);
    }
    const student = projects.id
    ? await this.studentRepository.findOne({where: { id: projects.id }})
    : null;
    const teacher = projects.id
    ? await this.teacherRepository.findOne({where: { id: projects.id }})
    : null;
    const marks = projects.id
    ? await this.markRepository.findOne({where: { id: projects.id}})
    : null;

    return{
      project: {
                  id: projects.id,
                  title: projects.TITLE,
                  project_subject: projects.PROJECT_SUBJECT,
                  project_mark: projects.PROJECT_MARKS,
                },
      student: student 
                ? {
                    id: student.id,
                    ProfilePic: student.PROFILEPICTURE,
                    name: student.NAME,
                  }
                  : null,
      teacher: teacher 
                ? {
                    id: teacher.id,
                    ProfilePic: teacher.PROFILEPICTURE,
                    name: teacher.NAME,
                }
                : null,
        }
  }

  async getProjectStudentDetail(id: number): Promise<any> {
    const projects = await this.projectRepository.findOne({where: { id }});
    if(!projects){
        throw new NotFoundException(`mark with ID ${id} not found`);
    }
    const student = projects.id
    ? await this.studentRepository.findOne({where: {id: projects.id}})
    : null;
    return{
        ...projects,
        student: student
        ? {
            id: student.id,
            ProfilePic: student.PROFILEPICTURE,
            name: student.NAME,
        }
        : null,
    }
  }
  
  async getProjectTeacherDetail(id: number): Promise<any> {
    const projects = await this.projectRepository.findOne({where: { id }});
    if(!projects){
      throw new NotFoundException(`mark with ID ${id} not found`);
    }
    const teacher = projects.id
    ? await this.teacherRepository.findOne({where: {id: projects.id}})
    : null;
    return{
      ...projects,
      teacher: teacher
      ? { id: teacher.id, ProfilePic: teacher.PROFILEPICTURE, name: teacher.NAME}
      : null,
    }
  }
  
  async getAllDetail(): Promise<any>{
    const projects = await this.projectRepository.find();
    const teachers = await this.teacherRepository.find();
    const students = await this.studentRepository.find();
    const marks = await this.markRepository.find();
    const combinedData = projects.map((projects) => {
      const student = students.find((s) => s.id === projects.id);
      const teacher = teachers.find((t) => t.id === projects.id);
        return {
          ...projects,
          student: student ? { id: student.id, ProfilePic: student.PROFILEPICTURE, name: student.NAME } : null,
          teacher: teacher ? { id: teacher.id, ProfilePic: teacher.PROFILEPICTURE, name: teacher.NAME } : null,
        }
    });

    return combinedData;
}

  create(createProjectDto: CreateProjectDto): Promise<PROJECT>{
    return this.projectRepository.save(createProjectDto);
  }

  findAll(): Promise<PROJECT[]>{
    return this.projectRepository.find();
  }

  findOne(id: number): Promise<PROJECT>{
    return this.projectRepository.findOneBy({id});
  }

  async update(id: number, updateProjectDto: UpdateProjectDto): Promise<void>{
    await this.projectRepository.update(id,updateProjectDto);
  }

  async remove(id: number): Promise<void>{
    await this.projectRepository.delete(id);
  }
}
