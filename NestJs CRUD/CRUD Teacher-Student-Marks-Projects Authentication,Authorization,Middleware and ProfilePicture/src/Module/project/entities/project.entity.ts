import { STUDENTS } from "src/Module/Student/entity/Student.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class PROJECT {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    STUDENT_ID: number;

    @Column()
    TITLE: string;

    @Column()
    PROJECT_SUBJECT: string;

    @Column()
    PROJECT_MARKS: number;


    @OneToOne(()=>STUDENTS,(student)=> student.project)
    @JoinColumn({ name: 'STUDENT_ID'})
    student: STUDENTS[];
}
