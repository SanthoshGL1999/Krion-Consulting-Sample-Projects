import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataBaseService } from './Config/STUDENTDB.config';
import { TeacherModule } from './Module/Teacher/teacher.module';
import { StudentModule } from './Module/Student/student.module';
import { MarkModule } from './Module/Mark/mark.module';
import { AuthModule } from './Module/auth/auth.module';
import { ProjectModule } from './Module/project/project.module';
import { TeacherController } from './Module/Teacher/teacher.controller';
import { StudentController } from './Module/Student/student.controller';
import { MarkController } from './Module/Mark/mark.controller';
import { ProjectController } from './Module/project/project.controller';
import { JwtMiddleware } from './Module/auth/Guards/Middleware/user_token.middleware';
import { UsersModule } from './Module/user/users.module';

@Module({
  imports: [TeacherModule,StudentModule,MarkModule,ProjectModule,AuthModule,UsersModule,
    TypeOrmModule.forRootAsync({useClass:DataBaseService}),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(JwtMiddleware)
    .forRoutes(TeacherController,StudentController,MarkController,ProjectController)
  }
}
