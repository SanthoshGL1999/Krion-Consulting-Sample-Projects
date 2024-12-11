import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeacherModule } from './Teacher/teacher.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataBaseService } from './Config/STUDENTDB.config';
import { StudentModule } from './Student/student.module';
import { MarkModule } from './Mark/mark.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [TeacherModule,StudentModule,MarkModule,UserModule,
    AuthModule,
    TypeOrmModule.forRootAsync({useClass:DataBaseService}),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
