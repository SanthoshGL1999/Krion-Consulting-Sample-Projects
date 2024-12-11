"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherModule = void 0;
const common_1 = require("@nestjs/common");
const teacher_controller_1 = require("./teacher.controller");
const teacher_service_1 = require("./teacher.service");
const typeorm_1 = require("@nestjs/typeorm");
const Teacher_entity_1 = require("./entity/Teacher.entity");
const Student_entity_1 = require("../Student/entity/Student.entity");
const Mark_entity_1 = require("../Mark/entity/Mark.entity");
const user_entity_1 = require("../user/entities/user.entity");
const project_entity_1 = require("../project/entities/project.entity");
let TeacherModule = class TeacherModule {
};
exports.TeacherModule = TeacherModule;
exports.TeacherModule = TeacherModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([Teacher_entity_1.TEACHERS, Student_entity_1.STUDENTS, Mark_entity_1.MARKS, project_entity_1.PROJECT, user_entity_1.Users])],
        controllers: [teacher_controller_1.TeacherController],
        providers: [teacher_service_1.TeacherService]
    })
], TeacherModule);
//# sourceMappingURL=teacher.module.js.map