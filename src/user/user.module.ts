import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { JwtModule } from '@nestjs/jwt';
import { OAuthApplication } from 'src/oauth/oauth.application';
import { ClientService } from 'src/domain/client/client.service';
@Module({
  imports:[JwtModule.register({ secret: 'pgprmp', signOptions: { expiresIn: '1h'}})],
  providers:[UserService, OAuthApplication,ClientService],
  controllers: [UserController],
  exports:[UserService]
})
export class UserModule {}
