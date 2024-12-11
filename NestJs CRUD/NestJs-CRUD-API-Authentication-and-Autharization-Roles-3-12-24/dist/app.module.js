"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const STUDENTDB_config_1 = require("./Config/STUDENTDB.config");
const teacher_module_1 = require("./Module/Teacher/teacher.module");
const student_module_1 = require("./Module/Student/student.module");
const mark_module_1 = require("./Module/Mark/mark.module");
const auth_module_1 = require("./Module/auth/auth.module");
const project_module_1 = require("./Module/project/project.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [teacher_module_1.TeacherModule, student_module_1.StudentModule, mark_module_1.MarkModule, project_module_1.ProjectModule, auth_module_1.AuthModule,
            typeorm_1.TypeOrmModule.forRootAsync({ useClass: STUDENTDB_config_1.DataBaseService }),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map