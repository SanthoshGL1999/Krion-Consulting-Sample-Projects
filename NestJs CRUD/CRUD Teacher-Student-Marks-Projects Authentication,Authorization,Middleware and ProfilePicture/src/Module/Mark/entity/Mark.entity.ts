import { STUDENTS } from "src/Module/Student/entity/Student.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class MARKS{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    STUDENT_ID: number;

    @Column()
    TAMIL: number;

    @Column()
    ENGLISH: number;

    @Column()
    MATHS: number;

    @Column()
    SCIENCE: number;

    @Column()
    SOCIAL_SCIENCE: number;

    @Column()
    GRADE: string;

    @ManyToOne(()=>STUDENTS,(students)=> students.marks)
    @JoinColumn({name:'STUDENT_ID'})
    students: STUDENTS;
}