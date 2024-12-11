import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PROJECT } from './entities/project.entity';
import { STUDENTS } from '../Student/entity/Student.entity';
import { TEACHERS } from '../Teacher/entity/Teacher.entity';
import { MARKS } from '../Mark/entity/Mark.entity';
import { Users } from '../user/entities/user.entity';

@Module({
  imports:[TypeOrmModule.forFeature([STUDENTS,TEACHERS,MARKS,PROJECT,Users])],
  controllers: [ProjectController],
  providers: [ProjectService],
})
export class ProjectModule {}
