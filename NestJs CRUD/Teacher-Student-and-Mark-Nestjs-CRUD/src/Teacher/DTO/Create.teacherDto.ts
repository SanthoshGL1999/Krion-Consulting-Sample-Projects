import { IsNotEmpty, IsString } from "class-validator";


export class CreateTeacherDto{

    @IsString()
    @IsNotEmpty()
    NAME: string;

    @IsString()
    @IsNotEmpty()
    SUBJECT: string;
}