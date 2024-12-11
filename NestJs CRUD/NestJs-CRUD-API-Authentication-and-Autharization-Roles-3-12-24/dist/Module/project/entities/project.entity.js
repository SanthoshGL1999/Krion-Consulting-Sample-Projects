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
exports.PROJECT = void 0;
const Student_entity_1 = require("../../Student/entity/Student.entity");
const typeorm_1 = require("typeorm");
let PROJECT = class PROJECT {
};
exports.PROJECT = PROJECT;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PROJECT.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], PROJECT.prototype, "STUDENT_ID", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PROJECT.prototype, "TITLE", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PROJECT.prototype, "PROJECT_SUBJECT", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], PROJECT.prototype, "PROJECT_MARKS", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => Student_entity_1.STUDENTS, (student) => student.project),
    (0, typeorm_1.JoinColumn)({ name: 'STUDENT_ID' }),
    __metadata("design:type", Array)
], PROJECT.prototype, "student", void 0);
exports.PROJECT = PROJECT = __decorate([
    (0, typeorm_1.Entity)()
], PROJECT);
//# sourceMappingURL=project.entity.js.map