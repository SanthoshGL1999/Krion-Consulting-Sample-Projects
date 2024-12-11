import { Injectable } from "@nestjs/common";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { MARKS } from "src/Module/Mark/entity/Mark.entity";
import { PROJECT } from "src/Module/project/entities/project.entity";
import { STUDENTS } from "src/Module/Student/entity/Student.entity";
import { TEACHERS } from "src/Module/Teacher/entity/Teacher.entity";
import { Users } from "src/Module/user/entities/user.entity";

@Injectable()
export class DataBaseService implements TypeOrmOptionsFactory{
    createTypeOrmOptions(): TypeOrmModuleOptions{
        return{
            type:'mssql',
            host:'localhost',
            port:1433,
            username:'Krion',
            password:'qwerty',
            database:'STUDENTDB',
            entities:[TEACHERS,STUDENTS,MARKS,PROJECT,Users],
            options:{ trustServerCertificate: true }
        };
    }
    
}