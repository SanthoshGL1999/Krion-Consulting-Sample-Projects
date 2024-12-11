import { Module } from '@nestjs/common';
import { TeacherController } from './teacher.controller';
import { TeacherService } from './teacher.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TEACHERS } from './entity/Teacher.entity';
import { STUDENTS } from 'src/Student/entity/Student.entity';
import { MARKS } from 'src/Mark/entity/Mark.entity';
import { Users } from 'src/user/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TEACHERS,STUDENTS,MARKS,Users])],
  controllers: [TeacherController],
  providers: [TeacherService]
})
export class TeacherModule {}
