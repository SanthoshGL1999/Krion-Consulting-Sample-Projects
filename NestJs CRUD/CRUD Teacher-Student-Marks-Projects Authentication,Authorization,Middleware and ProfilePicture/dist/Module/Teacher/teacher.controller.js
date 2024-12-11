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
exports.TeacherController = void 0;
const common_1 = require("@nestjs/common");
const teacher_service_1 = require("./teacher.service");
const Teacher_entity_1 = require("./entity/Teacher.entity");
const Jwt_auth_guard_1 = require("../auth/Guards/Jwt-auth.guard");
const roles_guard_1 = require("../auth/Guards/roles/roles.guard");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const path_1 = require("path");
let TeacherController = class TeacherController {
    constructor(teacherService) {
        this.teacherService = teacherService;
    }
    async uploadProfilePicture(id, file) {
        console.log(file);
        const filePath = `Upload/${file.filename}`;
        await this.teacherService.updateProfilePicture(id, filePath);
        return { message: 'Profile picture uploaded successfully', filePath };
    }
    async getProfilePicture(id) {
        const student = await this.teacherService.findOne(id);
        return { profilePicture: student.PROFILEPICTURE };
    }
    async getTeacherDetailById(id) {
        const data = await this.teacherService.getTeacherDetailById(id);
        return {
            success: true,
            data,
        };
    }
    async getTeacherStudentDetail(id) {
        const data = await this.teacherService.getTeacherStduentDetail(id);
        return {
            success: true,
            data,
        };
    }
    async getTeacherProjectDetail(id) {
        const data = await this.teacherService.getTeacherProjectDetail(id);
        return {
            success: true,
            data,
        };
    }
    async getAllDetail() {
        const data = await this.teacherService.getAllDetail();
        return {
            success: true,
            data,
        };
    }
    findAll() {
        return this.teacherService.findAll();
    }
    findOne(id) {
        return this.teacherService.findOne(id);
    }
    create(teacher) {
        return this.teacherService.create(teacher);
    }
    update(id, teacher) {
        return this.teacherService.update(id, teacher);
    }
    remove(id) {
        return this.teacherService.remove(id);
    }
};
exports.TeacherController = TeacherController;
__decorate([
    (0, common_1.Patch)(':id/upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.diskStorage)({
            destination: './Uploads/ProfilePicture',
            filename: (req, file, callback) => {
                const fileExtName = (0, path_1.extname)(file.originalname);
                const randomName = Array(16)
                    .fill(null)
                    .map(() => Math.round(Math.random() * 16).toString(16))
                    .join('');
                callback(null, `${randomName}${fileExtName}`);
            },
        }),
    })),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], TeacherController.prototype, "uploadProfilePicture", null);
__decorate([
    (0, common_1.Get)(':id/profilepicture'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TeacherController.prototype, "getProfilePicture", null);
__decorate([
    (0, common_1.Get)(':id/detail'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TeacherController.prototype, "getTeacherDetailById", null);
__decorate([
    (0, common_1.Get)(':id/student'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TeacherController.prototype, "getTeacherStudentDetail", null);
__decorate([
    (0, common_1.Get)(':id/project'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TeacherController.prototype, "getTeacherProjectDetail", null);
__decorate([
    (0, common_1.Get)('alldetail'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TeacherController.prototype, "getAllDetail", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TeacherController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TeacherController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Teacher_entity_1.TEACHERS]),
    __metadata("design:returntype", void 0)
], TeacherController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Teacher_entity_1.TEACHERS]),
    __metadata("design:returntype", void 0)
], TeacherController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TeacherController.prototype, "remove", null);
exports.TeacherController = TeacherController = __decorate([
    (0, common_1.Controller)('teacher'),
    (0, common_1.UseGuards)(Jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [teacher_service_1.TeacherService])
], TeacherController);
//# sourceMappingURL=teacher.controller.js.map