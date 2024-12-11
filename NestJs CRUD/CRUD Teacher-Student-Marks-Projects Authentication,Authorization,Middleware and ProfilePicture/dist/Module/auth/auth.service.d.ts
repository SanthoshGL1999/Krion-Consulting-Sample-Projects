import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { Users } from '../user/entities/user.entity';
import { role } from './Guards/enums/role.enum';
export declare class AuthService {
    private userRepository;
    private jwtService;
    constructor(userRepository: Repository<Users>, jwtService: JwtService);
    updateProfilePicture(id: number, filePath: string): Promise<void>;
    validateUser(username: string, pass: string, role: role): Promise<any>;
    login(username: string, password: string, role: role): Promise<{
        access_token: string;
    }>;
    register(username: string, pass: string, role: role): Promise<Users>;
    findOne(id: number): Promise<Users>;
    deleteUser(id: number): Promise<any>;
}
