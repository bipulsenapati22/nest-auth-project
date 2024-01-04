import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { OAuthApplication } from '../oauth/oauth.application'
 
@Injectable()
export class UserService {
  constructor(private readonly jwtService: JwtService) {}
 
  async registerWithOTP(email: string): Promise<boolean> {
    console.log(`Sending OTP to ${email}`);
    return true;
  }
 
  async login(email: string, password: string, oauthApplication: OAuthApplication): Promise<any> {
    console.log(`User ${email} logged in.`);
    oauthApplication.getClient("L7C9YKV9-ESF3606Q-GHF9H1F5-8LJMKRO5","GTD4rLPMMOPSiRQPIJJ3LRV42rMfwwRc");
    const payload = { email };
    return true;
  }
}