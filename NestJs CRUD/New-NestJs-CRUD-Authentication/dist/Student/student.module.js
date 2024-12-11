"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentModule = void 0;
const common_1 = require("@nestjs/common");
const student_service_1 = require("./student.service");
const student_controller_1 = require("./student.controller");
const typeorm_1 = require("@nestjs/typeorm");
const Student_entity_1 = require("./entity/Student.entity");
const Teacher_entity_1 = require("../Teacher/entity/Teacher.entity");
const Mark_entity_1 = require("../Mark/entity/Mark.entity");
const user_entity_1 = require("../user/entities/user.entity");
let StudentModule = class StudentModule {
};
exports.StudentModule = StudentModule;
exports.StudentModule = StudentModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([Student_entity_1.STUDENTS, Teacher_entity_1.TEACHERS, Mark_entity_1.MARKS, user_entity_1.Users])],
        providers: [student_service_1.StudentService],
        controllers: [student_controller_1.StudentController]
    })
], StudentModule);
//# sourceMappingURL=student.module.js.map