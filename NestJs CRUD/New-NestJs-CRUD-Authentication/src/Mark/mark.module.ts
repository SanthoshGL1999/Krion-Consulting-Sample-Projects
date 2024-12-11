import { Module } from '@nestjs/common';
import { MarkService } from './mark.service';
import { MarkController } from './mark.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MARKS } from './entity/Mark.entity';
import { TEACHERS } from 'src/Teacher/entity/Teacher.entity';
import { STUDENTS } from 'src/Student/entity/Student.entity';
import { Users } from 'src/user/entities/user.entity';

@Module({
  imports:[TypeOrmModule.forFeature([MARKS,TEACHERS,STUDENTS,Users])],
  providers: [MarkService],
  controllers: [MarkController]
})
export class MarkModule {}
