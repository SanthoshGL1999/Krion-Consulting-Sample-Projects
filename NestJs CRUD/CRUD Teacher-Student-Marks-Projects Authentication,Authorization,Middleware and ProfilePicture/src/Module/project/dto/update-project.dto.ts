import { IsArray, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";


export class UpdateProjectDto{

    @IsArray()
    @IsOptional()
    STUDENT_ID?: number;

    @IsString()
    @IsOptional()
    TITLE: string;

    @IsString()
    @IsOptional()
    PROJECT_SUBJECT: string;

    @IsNumber()
    @IsOptional()
    PROJECT_MARKS: number;
}
