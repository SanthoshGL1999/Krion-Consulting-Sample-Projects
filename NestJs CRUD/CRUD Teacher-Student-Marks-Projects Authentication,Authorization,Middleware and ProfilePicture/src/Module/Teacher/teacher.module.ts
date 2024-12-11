import { Module } from '@nestjs/common';
import { TeacherController } from './teacher.controller';
import { TeacherService } from './teacher.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TEACHERS } from './entity/Teacher.entity';
import { STUDENTS } from '../Student/entity/Student.entity';
import { MARKS } from '../Mark/entity/Mark.entity';
import { Users } from '../user/entities/user.entity';
import { PROJECT } from '../project/entities/project.entity';


@Module({
  imports: [TypeOrmModule.forFeature([TEACHERS,STUDENTS,MARKS,PROJECT,Users])],
  controllers: [TeacherController],
  providers: [TeacherService]
})
export class TeacherModule {}
