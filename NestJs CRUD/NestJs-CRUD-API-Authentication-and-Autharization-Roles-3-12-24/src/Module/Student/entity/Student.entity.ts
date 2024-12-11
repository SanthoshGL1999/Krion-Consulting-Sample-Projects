import { MARKS } from "src/Module/Mark/entity/Mark.entity";
import { PROJECT } from "src/Module/project/entities/project.entity";
import { TEACHERS } from "src/Module/Teacher/entity/Teacher.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class STUDENTS{
   
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    NAME: string;

    @Column()
    AGE: number;

    @Column()
    COURSE: string;

    @Column()
    CLASS_TEACHER: number;

    @ManyToOne(()=> TEACHERS,(teacher)=> teacher.student)
    @JoinColumn({name: 'CLASS_TEACHER'})
    teacher: TEACHERS;

    @OneToMany(()=> MARKS,(marks)=> marks.students)
    marks: MARKS[];

    @OneToOne(()=> PROJECT,(project)=> project.student)
    project: PROJECT[];


}