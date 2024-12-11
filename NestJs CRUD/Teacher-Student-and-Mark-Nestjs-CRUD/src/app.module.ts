import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeacherModule } from './Teacher/teacher.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataBaseService } from './Config/STUDENTDB.config';
import { StudentModule } from './Student/student.module';
import { MarkModule } from './Mark/mark.module';

@Module({
  imports: [TeacherModule,StudentModule,MarkModule,
    TypeOrmModule.forRootAsync({useClass:DataBaseService})
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
