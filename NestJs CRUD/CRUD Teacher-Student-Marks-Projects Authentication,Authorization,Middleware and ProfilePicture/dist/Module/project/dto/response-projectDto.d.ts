import { STUDENTS } from "src/Module/Student/entity/Student.entity";
export declare class ProjectResponseDto {
    id: number;
    title: string;
    mark: number;
    subject: string;
    student: STUDENTS[];
}
