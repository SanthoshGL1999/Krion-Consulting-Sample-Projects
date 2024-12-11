import { NestMiddleware } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request, Response, NextFunction } from 'express';
import { UsersService } from 'src/Module/user/users.service';
export declare class JwtMiddleware implements NestMiddleware {
    private readonly jwtService;
    private userService;
    constructor(jwtService: JwtService, userService: UsersService);
    use(req: Request, res: Response, next: NextFunction): Promise<void>;
}
