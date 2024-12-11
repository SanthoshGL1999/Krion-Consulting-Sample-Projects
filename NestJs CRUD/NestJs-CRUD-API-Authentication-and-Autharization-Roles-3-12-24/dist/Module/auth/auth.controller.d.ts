import { AuthService } from './auth.service';
import { role } from './Guards/enums/role.enum';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(login: {
        username: string;
        password: string;
    }): Promise<{
        access_token: string;
    }>;
    register(body: {
        username: string;
        password: string;
        role: role;
    }): Promise<import("../user/entities/user.entity").Users>;
}
