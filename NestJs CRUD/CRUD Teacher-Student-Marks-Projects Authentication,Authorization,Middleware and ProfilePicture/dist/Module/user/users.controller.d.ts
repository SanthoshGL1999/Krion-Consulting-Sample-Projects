import { UsersService } from './users.service';
import { Users } from './entities/user.entity';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    findAll(): Promise<Partial<Users>[]>;
    findOne(id: number): Promise<Partial<Users>>;
}
