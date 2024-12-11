import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataBaseService } from './Config/STUDENTDB.config';
import { TeacherModule } from './Module/Teacher/teacher.module';
import { StudentModule } from './Module/Student/student.module';
import { MarkModule } from './Module/Mark/mark.module';
import { AuthModule } from './Module/auth/auth.module';
import { ProjectModule } from './Module/project/project.module';

@Module({
  imports: [TeacherModule,StudentModule,MarkModule,ProjectModule,AuthModule,
    TypeOrmModule.forRootAsync({useClass:DataBaseService}),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
