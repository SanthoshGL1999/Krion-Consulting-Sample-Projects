import { Repository } from 'typeorm';
import { Users } from './entities/user.entity';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<Users>);
    findAll(): Promise<Partial<Users>[]>;
    findOne(id: number): Promise<Partial<Users>>;
    findById(id: number): Promise<Users>;
}
