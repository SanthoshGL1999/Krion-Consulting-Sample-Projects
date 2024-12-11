import { STUDENTS } from "src/Student/entity/Student.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TEACHERS{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    NAME: string;

    @Column()
    SUBJECT: string;

    @ManyToMany(()=> STUDENTS,(student)=> student.teacher)
    student: STUDENTS[];

}