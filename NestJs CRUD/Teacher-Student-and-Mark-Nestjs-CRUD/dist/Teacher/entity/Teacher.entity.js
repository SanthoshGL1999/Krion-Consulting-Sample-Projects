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
exports.TEACHERS = void 0;
const Student_entity_1 = require("../../Student/entity/Student.entity");
const typeorm_1 = require("typeorm");
let TEACHERS = class TEACHERS {
};
exports.TEACHERS = TEACHERS;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], TEACHERS.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TEACHERS.prototype, "NAME", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TEACHERS.prototype, "SUBJECT", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => Student_entity_1.STUDENTS, (student) => student.teacher),
    __metadata("design:type", Array)
], TEACHERS.prototype, "student", void 0);
exports.TEACHERS = TEACHERS = __decorate([
    (0, typeorm_1.Entity)()
], TEACHERS);
//# sourceMappingURL=Teacher.entity.js.map