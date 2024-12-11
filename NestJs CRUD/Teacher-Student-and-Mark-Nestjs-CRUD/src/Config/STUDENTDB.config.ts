import { Injectable } from "@nestjs/common";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { MARKS } from "src/Mark/entity/Mark.entity";
import { STUDENTS } from "src/Student/entity/Student.entity";
import { TEACHERS } from "src/Teacher/entity/Teacher.entity";


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
            entities:[TEACHERS,STUDENTS,MARKS],
            options:{trustServerCertificate: true,
                enableArithAbort: true
            }
        };
    }
}