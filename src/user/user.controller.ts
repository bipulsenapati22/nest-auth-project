import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { OAuthApplication } from '../oauth/oauth.application'
import { OAuth2RenewToken } from '../oauth/decorators/token.decorator';
@Controller('api/user')
    export class UserController {
        constructor(
            private readonly userService: UserService,
            private readonly oauthApplication: OAuthApplication) { }
        
        @Post('register')
        async register(@Body('email') email: string): Promise<any> {
            return this.userService.registerWithOTP(email);
        }

        @OAuth2RenewToken()
        @Post('login')
        async login(@Body('email') email: string, @Body('password') password: string): Promise<any> {
            return this.userService.login(email, password, this.oauthApplication);
        }
    }
