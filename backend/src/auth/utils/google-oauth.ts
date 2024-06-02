import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
// import { config } from 'dotenv';  

import { Injectable } from '@nestjs/common';

// config();

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {

  constructor() {
    super({
      clientID: '31032050428-dmj2al9sbctqfhqug01i877d3hj0auoo.apps.googleusercontent.com',
      clientSecret: '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',
      //callbackURL: 'http://localhost:9000/auth/redirect',
      callbackURL: 'https://wfsl-production.up.railway.app/auth/redirect',
      scope: ['email', 'profile'],
    });
  }

  async validate (accessToken: string, refreshToken: string, profile: any, done: VerifyCallback): Promise<any> {
    const { name, emails, photos } = profile
    const user = {
      email: emails[0].value,
      firstName: name.givenName,
      lastName: name.familyName,
      picture: photos[0].value,
      accessToken
    }
    done(null, user);
  }
}
