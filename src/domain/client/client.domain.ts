import { ApiProperty } from '@nestjs/swagger';
import { Client } from 'oauth2-server';

export class OAuthClient {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  clientId: string;

  @ApiProperty()
  clientSecret: string;

  @ApiProperty()
  redirectUri: string;

  @ApiProperty()
  grantTypes: string;

  @ApiProperty()
  scope: string | null;

  @ApiProperty()
  brand: string;

  @ApiProperty()
  rotateRefreshToken: string;

  @ApiProperty()
  accessTokenLifetime: number;

  @ApiProperty()
  refreshTokenLifetime: number;

  @ApiProperty()
  trusted: number;

  @ApiProperty()
  userId: number;

  @ApiProperty()
  uuid: string;

  @ApiProperty()
  isStrongPasswordPolicy: boolean;

  @ApiProperty()
  createdDate: Date;

  @ApiProperty()
  accountLockDuration: number;
}

export class OAuth2ServerClient implements Client {
  accessTokenLifetime: number | undefined;
  grants: string | string[];
  redirectUris: string | string[] | undefined;
  refreshTokenLifetime: number | undefined;
  id: any; 
  created_date: Date;

  static from(client: OAuthClient): OAuth2ServerClient {
    const {
      clientSecret,
      redirectUri,
      grantTypes,
      createdDate,
      ...restClient
    } = client;
    const fullGrants = [
      'authorization_code',
      'password',
      'refresh_token',
      'client_credentials',
    ];
    // const grants = splitAndTrim(grantTypes, ',');
    return {
      ...restClient,
      grants: grantTypes.length === 0 ? fullGrants : grantTypes,
      // redirectUris: splitAndTrim(redirectUri || '', ','),
      redirectUris: "https://pgmobile",
      created_date: createdDate,
    };
  }
}
