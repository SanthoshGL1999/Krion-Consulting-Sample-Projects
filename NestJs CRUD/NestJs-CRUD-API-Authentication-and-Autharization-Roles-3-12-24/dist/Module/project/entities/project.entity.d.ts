import { STUDENTS } from "src/Module/Student/entity/Student.entity";
export declare class PROJECT {
    id: number;
    STUDENT_ID: number;
    TITLE: string;
    PROJECT_SUBJECT: string;
    PROJECT_MARKS: number;
    student: STUDENTS[];
}
