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

    
    

    // @ManyToMany(()=>STUDENTS,(student)=> student.project, { cascade: true })
    // @JoinTable({
    //     name: 'project',
    //     joinColumn: { name: 'id', referencedColumnName: 'id' },
    //     inverseJoinColumn: { name: 'STUDENT_ID', referencedColumnName: 'id' }
    //   })
    // student: STUDENTS[];

    @OneToOne(()=>STUDENTS,(student)=> student.project)
    @JoinColumn({ name: 'STUDENT_ID'})
    student: STUDENTS[];

// @ManyToMany(() => STUDENTS, (student) => student.project, { cascade: true })
// @JoinTable({
//   name: 'project_student', // Name of the join table
//   joinColumn: { name: 'project_id', referencedColumnName: 'id' },
//   inverseJoinColumn: { name: 'student_id', referencedColumnName: 'id' },
// })
// student: STUDENTS[];
}
