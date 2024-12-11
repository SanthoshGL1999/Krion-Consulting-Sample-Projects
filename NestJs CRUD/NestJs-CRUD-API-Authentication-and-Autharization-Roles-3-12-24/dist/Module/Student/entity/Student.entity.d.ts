import { MARKS } from "src/Module/Mark/entity/Mark.entity";
import { PROJECT } from "src/Module/project/entities/project.entity";
import { TEACHERS } from "src/Module/Teacher/entity/Teacher.entity";
export declare class STUDENTS {
    id: number;
    NAME: string;
    AGE: number;
    COURSE: string;
    CLASS_TEACHER: number;
    teacher: TEACHERS;
    marks: MARKS[];
    project: PROJECT[];
}
