import { Module } from '@nestjs/common';
import { MarkService } from './mark.service';
import { MarkController } from './mark.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MARKS } from './entity/Mark.entity';
import { TEACHERS } from '../Teacher/entity/Teacher.entity';
import { STUDENTS } from '../Student/entity/Student.entity';
import { Users } from '../user/entities/user.entity';
import { PROJECT } from '../project/entities/project.entity';

@Module({
  imports:[TypeOrmModule.forFeature([MARKS,TEACHERS,STUDENTS,PROJECT,Users])],
  providers: [MarkService],
  controllers: [MarkController]
})
export class MarkModule {}
