import { Module } from '@nestjs/common';
import { OAuthApplication } from './oauth.application'
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { OAUTH2_SERVER_MODEL_PROVIDER } from './oauth2-server.constants';
import { ClientService } from 'src/domain/client/client.service';

@Module({
  providers: [OAuthApplication, {
    provide: OAUTH2_SERVER_MODEL_PROVIDER,
    useExisting: OAuthApplication,
  }, UserService, JwtService, ClientService,
  ],
  exports: [
    OAUTH2_SERVER_MODEL_PROVIDER,
    OAuthApplication,
  ],
})
export class OAuthApplicationModule { }
