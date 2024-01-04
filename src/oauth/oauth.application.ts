
import { Inject, Injectable, Logger, Scope } from '@nestjs/common';
import { UserService } from '../user/user.service'
import OAuth2Server from 'oauth2-server';
import { ClientService } from '../domain/client/client.service'
import { OAuth2ServerClient, OAuthClient } from '../domain/client/client.domain';

@Injectable({ scope: Scope.REQUEST })
export class OAuthApplication {
  private logger = new Logger(OAuthApplication.name);
  constructor(
    private userService: UserService,
    private clientService: ClientService,
    // @Inject('MODEL_PARAMS') private params: any,
  ) { }

  async getUser(username: string, password: string) {
    console.log("get user");
    return true;
  }

  async getMfaUser(mfaToken: string, mfaOtp: string) {
    console.log("getMfaUser");
    return true;
  }

  async getOtpUser(
    params: Record<string, unknown> & {
      client?: { brand?: string };
      username: string;
    },
    mobileToken?: string,
  ) {
    console.log("getOtpUser");
    return true;
  }


  async getAccessToken(
    accessToken: string,
  ): Promise<void> {
    let data;
    let isValidToken = false;
    console.log("getAccessToken");

  }

  private async validateLongLiveToken(accessToken) {
    console.log(" Here is validateLongLiveToken");

  }

  async getAuthorizationCode(
    authorizationCode: string,
  ): Promise<boolean> {
    console.log('get stored authorization code');
    return true;
  }

  async getClient(
    clientId: string,
    clientSecret: string,
  ): Promise<OAuth2Server.Client | OAuth2Server.Falsey> {
    console.log(clientId);
    
    console.log(clientSecret);
    
    return {
      id: "998812345572",
      // clientId: "L7C9YKV9-ESF3606Q-GHF9H1F5-8LJMKRO5",
      redirectUris: "GTD4rLPMMOPSiRQPIJJ3LRV42rMfwwRc",
      grants: ["authorization_code"]
    };
  }

  async revokeAuthorizationCode(
    code: OAuth2Server.AuthorizationCode,
  ): Promise<boolean> {
    console.log("revokeAuthorizationCode");

    return true;
  }


  async saveToken(
    token: OAuth2Server.Token,
    client: OAuth2Server.Client,
    user: OAuth2Server.User,
  ): Promise<boolean> {
    console.log('save token is');
    return true;
  }

  async getRefreshToken(
    refreshToken: string,
  ): Promise<boolean> {
    return true
  }

  async revokeToken(token: OAuth2Server.RefreshToken): Promise<boolean> {
    return true;
  }


}
