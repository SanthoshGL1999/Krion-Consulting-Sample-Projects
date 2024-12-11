import { MARKS } from './entity/Mark.entity';
import { Repository } from 'typeorm';
import { CreateMarksDto } from './DTO/Create.markDto';
import { UpdateMarksDto } from './DTO/Update.markDto';
export declare class MarkService {
    private markRepository;
    findMarksByStudentId(id: any): void;
    constructor(markRepository: Repository<MARKS>);
    findAll(): Promise<MARKS[]>;
    findOne(id: number): Promise<MARKS>;
    create(createMarksDto: CreateMarksDto): Promise<MARKS>;
    update(id: number, updateMarksDto: UpdateMarksDto): Promise<void>;
    remove(id: number): Promise<void>;
}
