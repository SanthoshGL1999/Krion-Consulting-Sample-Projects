import { MarkService } from './mark.service';
import { MARKS } from './entity/Mark.entity';
export declare class MarkController {
    private readonly marksService;
    constructor(marksService: MarkService);
    findAll(): Promise<MARKS[]>;
    findOne(id: number): Promise<MARKS>;
    create(marks: MARKS): Promise<MARKS>;
    getMyMarks(req: any): Promise<void>;
    update(id: number, marks: MARKS): Promise<void>;
    remove(id: number): Promise<void>;
}
