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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const path_1 = require("path");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async uploadProfilePicture(id, file) {
        console.log(file);
        const filePath = `Upload/${file.filename}`;
        await this.authService.updateProfilePicture(id, filePath);
        return { message: 'Profile picture uploaded successfully', filePath };
    }
    async getProfilePicture(id) {
        const student = await this.authService.findOne(id);
        return { profilePicture: student.PROFILEPICTURE };
    }
    async login(login) {
        const { username, password, role } = login;
        try {
            return await this.authService.login(username, password, role);
        }
        catch (error) {
            console.error('Login error:', error);
            throw new common_1.InternalServerErrorException('An error occurred while logging in');
        }
    }
    async register(body) {
        try {
            if (!body.username || !body.password || !body.role) {
                throw new common_1.BadRequestException('Username and password are required');
            }
            return await this.authService.register(body.username, body.password, body.role);
        }
        catch (error) {
            console.error('Registration error:', error);
            if (error instanceof common_1.BadRequestException) {
                throw error;
            }
            throw new common_1.InternalServerErrorException('An error occurred while registering');
        }
    }
    async deleteUser(id) {
        return await this.authService.deleteUser(id);
    }
};
exports.AuthController = AuthController;
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
], AuthController.prototype, "uploadProfilePicture", null);
__decorate([
    (0, common_1.Get)(':id/profilepicture'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getProfilePicture", null);
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "deleteUser", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map