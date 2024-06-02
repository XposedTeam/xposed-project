import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './utils/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './utils/jwt.strategy';
import { ConfigModule } from '@nestjs/config';
import { UserDetailsModule } from 'src/user-details/user-details.module';
import { UserSecurityModule } from 'src/user-security/user-security.module';
import { GoogleStrategy } from './utils/google-oauth';

@Module({
    imports: [ConfigModule.forRoot(), PassportModule, UserDetailsModule, UserSecurityModule, JwtModule.register({
    secret: process.env.JWT_SECRET,
    signOptions: { expiresIn: '168h' },
    }),],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy, GoogleStrategy],
})
export class AuthModule {}
