import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { OAuthApplicationModule } from './oauth/oauth.application.module';
import { IOAuth2ServerModuleOptions } from './oauth/interfaces';
import { OAuth2ServerModule } from './oauth/oauth2-server.module';

@Module({
  imports: [UserModule, OAuthApplicationModule,  OAuth2ServerModule.forRootAsync({
    useFactory: (): IOAuth2ServerModuleOptions => ({}),
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
