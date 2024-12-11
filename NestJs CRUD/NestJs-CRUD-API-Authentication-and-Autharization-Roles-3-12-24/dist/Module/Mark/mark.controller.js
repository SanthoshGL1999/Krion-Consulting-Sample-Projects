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
exports.MarkController = void 0;
const common_1 = require("@nestjs/common");
const mark_service_1 = require("./mark.service");
const Mark_entity_1 = require("./entity/Mark.entity");
const Jwt_auth_guard_1 = require("../auth/Guards/Jwt-auth.guard");
const roles_guard_1 = require("../auth/Guards/roles/roles.guard");
const role_enum_1 = require("../auth/Guards/enums/role.enum");
const roles_decorator_1 = require("../auth/Guards/decorator/roles.decorator");
const Create_markDto_1 = require("./DTO/Create.markDto");
const Update_markDto_1 = require("./DTO/Update.markDto");
let MarkController = class MarkController {
    constructor(marksService) {
        this.marksService = marksService;
    }
    async createMarks(createMarksDto) {
        return this.marksService.createMarks(createMarksDto);
    }
    async updateMarks(id, updateMarksDto) {
        return this.marksService.updateMarks(id, updateMarksDto);
    }
    async getMarkDetailById(id) {
        const data = await this.marksService.getMarkDetailById(id);
        return {
            success: true,
            data
        };
    }
    async getMarkStudentById(id) {
        const data = await this.marksService.getMarkStudentDetail(id);
        return {
            success: true,
            data
        };
    }
    async getMarkTeacherById(id) {
        const data = await this.marksService.getMarkTeacherDetail(id);
        return {
            success: true,
            data
        };
    }
    async getMarkAllDetail() {
        const data = await this.marksService.getAllDetail();
        return {
            success: true,
            data
        };
    }
    findAll() {
        return this.marksService.findAll();
    }
    findOne(id) {
        return this.marksService.findOne(id);
    }
    create(marks) {
        return this.marksService.create(marks);
    }
    update(id, marks) {
        return this.marksService.update(id, marks);
    }
    remove(id) {
        return this.marksService.remove(id);
    }
};
exports.MarkController = MarkController;
__decorate([
    (0, roles_decorator_1.Roles)(role_enum_1.role.ADMIN, role_enum_1.role.TEACHER),
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Create_markDto_1.CreateMarksDto]),
    __metadata("design:returntype", Promise)
], MarkController.prototype, "createMarks", null);
__decorate([
    (0, roles_decorator_1.Roles)(role_enum_1.role.ADMIN, role_enum_1.role.TEACHER),
    (0, common_1.Put)(':id/Update'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Update_markDto_1.UpdateMarksDto]),
    __metadata("design:returntype", Promise)
], MarkController.prototype, "updateMarks", null);
__decorate([
    (0, roles_decorator_1.Roles)(role_enum_1.role.ADMIN, role_enum_1.role.TEACHER, role_enum_1.role.STUDENT),
    (0, common_1.Get)(':id/detail'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MarkController.prototype, "getMarkDetailById", null);
__decorate([
    (0, roles_decorator_1.Roles)(role_enum_1.role.ADMIN, role_enum_1.role.TEACHER, role_enum_1.role.STUDENT),
    (0, common_1.Get)(':id/student'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MarkController.prototype, "getMarkStudentById", null);
__decorate([
    (0, roles_decorator_1.Roles)(role_enum_1.role.ADMIN, role_enum_1.role.TEACHER, role_enum_1.role.STUDENT),
    (0, common_1.Get)(':id/teacher'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MarkController.prototype, "getMarkTeacherById", null);
__decorate([
    (0, roles_decorator_1.Roles)(role_enum_1.role.ADMIN, role_enum_1.role.TEACHER, role_enum_1.role.STUDENT),
    (0, common_1.Get)('alldetail'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MarkController.prototype, "getMarkAllDetail", null);
__decorate([
    (0, roles_decorator_1.Roles)(role_enum_1.role.ADMIN, role_enum_1.role.TEACHER, role_enum_1.role.STUDENT),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MarkController.prototype, "findAll", null);
__decorate([
    (0, roles_decorator_1.Roles)(role_enum_1.role.ADMIN, role_enum_1.role.TEACHER, role_enum_1.role.STUDENT),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MarkController.prototype, "findOne", null);
__decorate([
    (0, roles_decorator_1.Roles)(role_enum_1.role.ADMIN, role_enum_1.role.TEACHER),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Mark_entity_1.MARKS]),
    __metadata("design:returntype", void 0)
], MarkController.prototype, "create", null);
__decorate([
    (0, roles_decorator_1.Roles)(role_enum_1.role.ADMIN, role_enum_1.role.TEACHER),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Mark_entity_1.MARKS]),
    __metadata("design:returntype", void 0)
], MarkController.prototype, "update", null);
__decorate([
    (0, roles_decorator_1.Roles)(role_enum_1.role.ADMIN, role_enum_1.role.TEACHER),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MarkController.prototype, "remove", null);
exports.MarkController = MarkController = __decorate([
    (0, common_1.Controller)('mark'),
    (0, common_1.UseGuards)(Jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [mark_service_1.MarkService])
], MarkController);
//# sourceMappingURL=mark.controller.js.map