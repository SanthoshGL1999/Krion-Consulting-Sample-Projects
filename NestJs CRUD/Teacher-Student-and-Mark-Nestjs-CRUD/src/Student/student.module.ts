import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { STUDENTS } from './entity/Student.entity';
import { TEACHERS } from 'src/Teacher/entity/Teacher.entity';
import { MARKS } from 'src/Mark/entity/Mark.entity';

@Module({
  imports:[TypeOrmModule.forFeature([STUDENTS,TEACHERS,MARKS])],
  providers: [StudentService],
  controllers: [StudentController]
})
export class StudentModule {}
