import { STUDENTS } from "src/Student/entity/Student.entity";
import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TEACHERS{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    NAME: string;

    @Column()
    SUBJECT: string;

    @OneToMany(()=> STUDENTS,(student)=> student.teacher)
    student: STUDENTS[];

}