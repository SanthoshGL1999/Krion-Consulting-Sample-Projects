import { AuthService } from './auth.service';
import { role } from './Guards/enums/role.enum';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    uploadProfilePicture(id: number, file: Express.Multer.File): Promise<{
        message: string;
        filePath: string;
    }>;
    getProfilePicture(id: number): Promise<{
        profilePicture: string;
    }>;
    login(login: {
        username: string;
        password: string;
        role: role;
    }): Promise<{
        access_token: string;
    }>;
    register(body: {
        username: string;
        password: string;
        role: role;
    }): Promise<import("../user/entities/user.entity").Users>;
    deleteUser(id: number): Promise<any>;
}
