import { JwtService } from '@nestjs/jwt';
import { Users } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
export declare class AuthService {
    private userRepository;
    private jwtService;
    constructor(userRepository: Repository<Users>, jwtService: JwtService);
    validateUser(username: string, pass: string): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
    }>;
    register(username: string, pass: string): Promise<Users>;
}
