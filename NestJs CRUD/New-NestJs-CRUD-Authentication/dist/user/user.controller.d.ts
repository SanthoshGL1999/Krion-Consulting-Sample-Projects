import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findAll(): Promise<Partial<import("./entities/user.entity").Users>[]>;
    findOne(id: number): Promise<Partial<import("./entities/user.entity").Users>>;
}
