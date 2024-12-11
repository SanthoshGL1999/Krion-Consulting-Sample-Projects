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
exports.MarkService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Mark_entity_1 = require("./entity/Mark.entity");
const typeorm_2 = require("typeorm");
const Teacher_entity_1 = require("../Teacher/entity/Teacher.entity");
const Student_entity_1 = require("../Student/entity/Student.entity");
const project_entity_1 = require("../project/entities/project.entity");
let MarkService = class MarkService {
    constructor(markRepository, teacherRepository, studentRepository, projectRepository) {
        this.markRepository = markRepository;
        this.teacherRepository = teacherRepository;
        this.studentRepository = studentRepository;
        this.projectRepository = projectRepository;
    }
    calculateGrade(totalMarks) {
        const average = totalMarks / 5;
        if (average >= 90)
            return 'A+';
        if (average >= 80)
            return 'A';
        if (average >= 70)
            return 'B';
        if (average >= 60)
            return 'C';
        if (average >= 50)
            return 'D';
        return 'F';
    }
    async createMarks(createMarksDto) {
        const { STUDENT_ID, TAMIL, ENGLISH, MATHS, SCIENCE, SOCIAL_SCIENCE } = createMarksDto;
        const totalMarks = TAMIL + ENGLISH + MATHS + SCIENCE + SOCIAL_SCIENCE;
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
    async updateMarks(id, updateMarksDto) {
        const { STUDENT_ID, TAMIL, ENGLISH, MATHS, SCIENCE, SOCIAL_SCIENCE } = updateMarksDto;
        const totalMarks = TAMIL + ENGLISH + MATHS + SCIENCE + SOCIAL_SCIENCE;
        const GRADE = this.calculateGrade(totalMarks);
        await this.markRepository.update(id, {
            STUDENT_ID,
            TAMIL,
            ENGLISH,
            MATHS,
            SCIENCE,
            SOCIAL_SCIENCE,
            GRADE,
        });
        return await this.markRepository.findOneBy({ id });
    }
    async getMarkDetailById(id) {
        const marks = await this.markRepository.findOne({ where: { id } });
        if (!marks) {
            throw new common_1.NotFoundException(`Marks with ID ${id} not found`);
        }
        const student = marks.id
            ? await this.studentRepository.findOne({ where: { id: marks.id } })
            : null;
        const teacher = student.CLASS_TEACHER
            ? await this.teacherRepository.findOne({ where: { id: student.CLASS_TEACHER } })
            : null;
        const projects = marks.id
            ? await this.projectRepository.findOne({ where: { id: marks.id } })
            : null;
        return {
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
        };
    }
    async getMarkStudentDetail(id) {
        const marks = await this.markRepository.findOne({ where: { id } });
        if (!marks) {
            throw new common_1.NotFoundException(`mark with ID ${id} not found`);
        }
        const student = marks.id
            ? await this.studentRepository.findOne({ where: { id: marks.id } })
            : null;
        return {
            ...marks,
            student: student
                ? {
                    id: student.id,
                    name: student.NAME,
                }
                : null,
        };
    }
    async getMarkTeacherDetail(id) {
        const student = await this.studentRepository.findOne({ where: { id } });
        const marks = await this.markRepository.findOne({ where: { id } });
        if (!marks) {
            throw new common_1.NotFoundException(`mark with ID ${id} not found`);
        }
        const teacher = student.CLASS_TEACHER
            ? await this.teacherRepository.findOne({ where: { id: student.CLASS_TEACHER } })
            : null;
        return {
            ...marks,
            teacher: teacher
                ? { id: teacher.id, name: teacher.NAME }
                : null,
        };
    }
    async getAllDetail() {
        const teachers = await this.teacherRepository.find();
        const students = await this.studentRepository.find();
        const marks = await this.markRepository.find();
        const projects = await this.projectRepository.find();
        const combinedData = marks.map((marks) => {
            const student = students.find((s) => s.id === marks.id);
            const teacher = teachers.find((t) => t.id === student.CLASS_TEACHER);
            return {
                ...marks,
                student: student ? { id: student.id, name: student.NAME } : null,
                teacher: teacher ? { id: teacher.id, name: teacher.NAME } : null,
            };
        });
        return combinedData;
    }
    findAll() {
        return this.markRepository.find();
    }
    findOne(id) {
        return this.markRepository.findOneBy({ id });
    }
    create(createMarksDto) {
        return this.markRepository.save(createMarksDto);
    }
    async update(id, updateMarksDto) {
        await this.markRepository.update(id, updateMarksDto);
    }
    async remove(id) {
        await this.markRepository.delete(id);
    }
};
exports.MarkService = MarkService;
exports.MarkService = MarkService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Mark_entity_1.MARKS)),
    __param(1, (0, typeorm_1.InjectRepository)(Teacher_entity_1.TEACHERS)),
    __param(2, (0, typeorm_1.InjectRepository)(Student_entity_1.STUDENTS)),
    __param(3, (0, typeorm_1.InjectRepository)(project_entity_1.PROJECT)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], MarkService);
//# sourceMappingURL=mark.service.js.map