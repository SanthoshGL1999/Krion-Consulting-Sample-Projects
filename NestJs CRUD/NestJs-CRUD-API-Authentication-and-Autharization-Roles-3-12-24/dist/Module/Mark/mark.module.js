"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarkModule = void 0;
const common_1 = require("@nestjs/common");
const mark_service_1 = require("./mark.service");
const mark_controller_1 = require("./mark.controller");
const typeorm_1 = require("@nestjs/typeorm");
const Mark_entity_1 = require("./entity/Mark.entity");
const Teacher_entity_1 = require("../Teacher/entity/Teacher.entity");
const Student_entity_1 = require("../Student/entity/Student.entity");
const user_entity_1 = require("../user/entities/user.entity");
const project_entity_1 = require("../project/entities/project.entity");
let MarkModule = class MarkModule {
};
exports.MarkModule = MarkModule;
exports.MarkModule = MarkModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([Mark_entity_1.MARKS, Teacher_entity_1.TEACHERS, Student_entity_1.STUDENTS, project_entity_1.PROJECT, user_entity_1.Users])],
        providers: [mark_service_1.MarkService],
        controllers: [mark_controller_1.MarkController]
    })
], MarkModule);
//# sourceMappingURL=mark.module.js.map