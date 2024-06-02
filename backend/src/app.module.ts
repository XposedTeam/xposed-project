import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { UserDetailsModule } from './user-details/user-details.module';
import { UserSecurityModule } from './user-security/user-security.module';
import { UserDetail } from './user-details/entities/user-detail.entity';
import { UserSecurity } from './user-security/entities/user-security.entity';

@Module({
  imports: [ConfigModule.forRoot(), TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [UserDetail, UserSecurity],
    synchronize: true,
  }),
   AuthModule,
   UserDetailsModule,
   UserSecurityModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
