import { STUDENTS } from "src/Module/Student/entity/Student.entity";
import { TEACHERS } from "src/Module/Teacher/entity/Teacher.entity";


export class ProjectResponseDto{

    id: number;
    title: string;
    mark:number;
    subject: string;
    student: STUDENTS[];

}