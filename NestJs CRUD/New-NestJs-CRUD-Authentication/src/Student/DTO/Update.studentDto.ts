import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";


export class UpdateStudentDto{

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    NAME: string;

    @IsNumber()
    @IsNotEmpty()
    @IsOptional()
    AGE: number;

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    COURSE: string;

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    GRADE: string;

    @IsNumber()
    @IsNotEmpty()
    @IsOptional()
    CLASS_TEACHER?: number;
    
}