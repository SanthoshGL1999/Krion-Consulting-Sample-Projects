import { Module } from '@nestjs/common';
import { MarkService } from './mark.service';
import { MarkController } from './mark.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MARKS } from './entity/Mark.entity';
import { TEACHERS } from 'src/Teacher/entity/Teacher.entity';
import { STUDENTS } from 'src/Student/entity/Student.entity';

@Module({
  imports:[TypeOrmModule.forFeature([MARKS,TEACHERS,STUDENTS])],
  providers: [MarkService],
  controllers: [MarkController]
})
export class MarkModule {}
