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
exports.TeacherService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Teacher_entity_1 = require("./entity/Teacher.entity");
const typeorm_2 = require("typeorm");
let TeacherService = class TeacherService {
    constructor(teacherReopsitory) {
        this.teacherReopsitory = teacherReopsitory;
    }
    findAll() {
        return this.teacherReopsitory.find();
    }
    findOne(id) {
        return this.teacherReopsitory.findOneBy({ id });
    }
    create(createTeacherDto) {
        return this.teacherReopsitory.save(createTeacherDto);
    }
    async update(id, updateTeacherDto) {
        await this.teacherReopsitory.update(id, updateTeacherDto);
    }
    async remove(id) {
        await this.teacherReopsitory.delete(id);
    }
};
exports.TeacherService = TeacherService;
exports.TeacherService = TeacherService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Teacher_entity_1.TEACHERS)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TeacherService);
//# sourceMappingURL=teacher.service.js.map