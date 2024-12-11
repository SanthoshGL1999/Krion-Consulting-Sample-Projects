"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const project_entity_1 = require("./entities/project.entity");
const typeorm_2 = require("typeorm");
const Mark_entity_1 = require("../Mark/entity/Mark.entity");
const Teacher_entity_1 = require("../Teacher/entity/Teacher.entity");
const Student_entity_1 = require("../Student/entity/Student.entity");
let ProjectService = class ProjectService {
    constructor(projectRepository, markRepository, teacherRepository, studentRepository) {
        this.projectRepository = projectRepository;
        this.markRepository = markRepository;
        this.teacherRepository = teacherRepository;
        this.studentRepository = studentRepository;
    }
    async getProjectDetailById(id) {
        const projects = await this.projectRepository.findOne({ where: { id } });
        if (!projects) {
            throw new common_1.NotFoundException(`project with ID ${id} not found`);
        }
        const student = projects.id
            ? await this.studentRepository.findOne({ where: { id: projects.id } })
            : null;
        const teacher = projects.id
            ? await this.teacherRepository.findOne({ where: { id: projects.id } })
            : null;
        const marks = projects.id
            ? await this.markRepository.findOne({ where: { id: projects.id } })
            : null;
        return {
            project: {
                id: projects.id,
                title: projects.TITLE,
                project_subject: projects.PROJECT_SUBJECT,
                project_mark: projects.PROJECT_MARKS,
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
        };
    }
    async getProjectStudentDetail(id) {
        const projects = await this.projectRepository.findOne({ where: { id } });
        if (!projects) {
            throw new common_1.NotFoundException(`mark with ID ${id} not found`);
        }
        const student = projects.id
            ? await this.studentRepository.findOne({ where: { id: projects.id } })
            : null;
        return {
            ...projects,
            student: student
                ? {
                    id: student.id,
                    name: student.NAME,
                }
                : null,
        };
    }
    async getProjectTeacherDetail(id) {
        const projects = await this.projectRepository.findOne({ where: { id } });
        if (!projects) {
            throw new common_1.NotFoundException(`mark with ID ${id} not found`);
        }
        const teacher = projects.id
            ? await this.teacherRepository.findOne({ where: { id: projects.id } })
            : null;
        return {
            ...projects,
            teacher: teacher
                ? { id: teacher.id, name: teacher.NAME }
                : null,
        };
    }
    async getAllDetail() {
        const projects = await this.projectRepository.find();
        const teachers = await this.teacherRepository.find();
        const students = await this.studentRepository.find();
        const marks = await this.markRepository.find();
        const combinedData = projects.map((projects) => {
            const student = students.find((s) => s.id === projects.id);
            const teacher = teachers.find((t) => t.id === projects.id);
            return {
                ...projects,
                student: student ? { id: student.id, name: student.NAME } : null,
                teacher: teacher ? { id: teacher.id, name: teacher.NAME } : null,
            };
        });
        return combinedData;
    }
    create(createProjectDto) {
        return this.projectRepository.save(createProjectDto);
    }
    findAll() {
        return this.projectRepository.find();
    }
    findOne(id) {
        return this.projectRepository.findOneBy({ id });
    }
    async update(id, updateProjectDto) {
        await this.projectRepository.update(id, updateProjectDto);
    }
    async remove(id) {
        await this.projectRepository.delete(id);
    }
};
exports.ProjectService = ProjectService;
exports.ProjectService = ProjectService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(project_entity_1.PROJECT)),
    __param(1, (0, typeorm_1.InjectRepository)(Mark_entity_1.MARKS)),
    __param(2, (0, typeorm_1.InjectRepository)(Teacher_entity_1.TEACHERS)),
    __param(3, (0, typeorm_1.InjectRepository)(Student_entity_1.STUDENTS)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], ProjectService);
//# sourceMappingURL=project.service.js.map