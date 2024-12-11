import { IsOptional, IsString } from "class-validator";


export class UpdateTeacherDto{

    @IsString()
    @IsOptional()
    NAME?: string;

    @IsString()
    @IsOptional()
    SUBJECT?: string;
}