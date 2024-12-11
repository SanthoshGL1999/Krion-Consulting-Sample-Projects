import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(req: any): Promise<{
        access_token: string;
    }>;
    register(body: {
        username: string;
        password: string;
    }): Promise<import("../user/entities/user.entity").Users>;
}
