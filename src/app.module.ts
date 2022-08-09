import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { PostModule } from './post/post.module'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 3306,
      database: 'crash-course-nestjs',
      username: 'root',
      password: '',
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      migrations: [__dirname + '/../**/*.entity{.ts,.js}']
    }),
    PostModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
