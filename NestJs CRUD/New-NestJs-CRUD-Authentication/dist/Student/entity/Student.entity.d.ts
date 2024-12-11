import { MARKS } from "src/Mark/entity/Mark.entity";
import { TEACHERS } from "src/Teacher/entity/Teacher.entity";
export declare class STUDENTS {
    id: number;
    NAME: string;
    AGE: number;
    COURSE: string;
    GRADE: string;
    CLASS_TEACHER: number;
    teacher: TEACHERS;
    marks: MARKS[];
}
