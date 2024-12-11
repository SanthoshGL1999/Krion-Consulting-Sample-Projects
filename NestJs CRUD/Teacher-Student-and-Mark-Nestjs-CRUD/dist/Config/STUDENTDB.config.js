"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataBaseService = void 0;
const common_1 = require("@nestjs/common");
const Mark_entity_1 = require("../Mark/entity/Mark.entity");
const Student_entity_1 = require("../Student/entity/Student.entity");
const Teacher_entity_1 = require("../Teacher/entity/Teacher.entity");
let DataBaseService = class DataBaseService {
    createTypeOrmOptions() {
        return {
            type: 'mssql',
            host: 'localhost',
            port: 1433,
            username: 'Krion',
            password: 'qwerty',
            database: 'STUDENTDB',
            entities: [Teacher_entity_1.TEACHERS, Student_entity_1.STUDENTS, Mark_entity_1.MARKS],
            options: { trustServerCertificate: true,
                enableArithAbort: true
            }
        };
    }
};
exports.DataBaseService = DataBaseService;
exports.DataBaseService = DataBaseService = __decorate([
    (0, common_1.Injectable)()
], DataBaseService);
//# sourceMappingURL=STUDENTDB.config.js.map