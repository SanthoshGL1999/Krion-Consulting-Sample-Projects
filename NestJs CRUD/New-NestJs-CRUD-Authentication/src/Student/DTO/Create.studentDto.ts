import { IsNumber } from "class-validator";


export class CreateStudentDto{

    NAME: string;
    AGE: number;
    COURSE: string;
    GRADE: string;
    CLASS_TEACHER?: number;
    teacherid: number
}