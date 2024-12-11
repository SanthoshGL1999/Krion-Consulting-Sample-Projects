import { Repository } from 'typeorm';
import { Users } from './entities/user.entity';
export declare class UserService {
    private usersRepository;
    constructor(usersRepository: Repository<Users>);
    findAll(): Promise<Partial<Users>[]>;
    findOne(id: number): Promise<Partial<Users>>;
    findById(id: number): Promise<Users>;
}
