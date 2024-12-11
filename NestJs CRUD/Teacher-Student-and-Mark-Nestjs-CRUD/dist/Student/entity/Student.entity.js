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
Object.defineProperty(exports, "__esModule", { value: true });
exports.STUDENTS = void 0;
const Mark_entity_1 = require("../../Mark/entity/Mark.entity");
const Teacher_entity_1 = require("../../Teacher/entity/Teacher.entity");
const typeorm_1 = require("typeorm");
let STUDENTS = class STUDENTS {
};
exports.STUDENTS = STUDENTS;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], STUDENTS.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], STUDENTS.prototype, "NAME", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], STUDENTS.prototype, "AGE", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], STUDENTS.prototype, "COURSE", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], STUDENTS.prototype, "GRADE", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], STUDENTS.prototype, "CLASS_TEACHER", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => Teacher_entity_1.TEACHERS, (teacher) => teacher.student),
    (0, typeorm_1.JoinColumn)({ name: 'teacherid' }),
    __metadata("design:type", Teacher_entity_1.TEACHERS)
], STUDENTS.prototype, "teacher", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => Mark_entity_1.MARKS, (marks) => marks.students),
    __metadata("design:type", Array)
], STUDENTS.prototype, "marks", void 0);
exports.STUDENTS = STUDENTS = __decorate([
    (0, typeorm_1.Entity)()
], STUDENTS);
//# sourceMappingURL=Student.entity.js.map