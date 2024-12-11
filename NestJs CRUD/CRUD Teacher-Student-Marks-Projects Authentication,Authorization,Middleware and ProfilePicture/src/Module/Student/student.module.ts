import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { STUDENTS } from './entity/Student.entity';
import { TEACHERS } from '../Teacher/entity/Teacher.entity';
import { MARKS } from '../Mark/entity/Mark.entity';
import { Users } from '../user/entities/user.entity';
import { PROJECT } from '../project/entities/project.entity';


@Module({
  imports:[TypeOrmModule.forFeature([STUDENTS,TEACHERS,MARKS,PROJECT,Users])],
  providers: [StudentService],
  controllers: [StudentController]
})
export class StudentModule {}
