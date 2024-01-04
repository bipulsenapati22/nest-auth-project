
import { Injectable } from '@nestjs/common';
import { OAuthClient } from './client.domain';
import { GetClientFilter } from './client.service';

@Injectable()
export abstract class IClientRepository {
  abstract findClients(
    where: Record<string, string> | undefined,
    take: number,
    skip: number,
  ): Promise<OAuthClient[]>;

  abstract createClient(body: Partial<OAuthClient>): Promise<OAuthClient>;

  abstract getClientByFilter(
    where: GetClientFilter,
  ): Promise<OAuthClient | undefined>;

  abstract updateClient(
    body: Partial<OAuthClient>,
  ): Promise<OAuthClient | null>;

  abstract getClientByName(
    clientName: string,
  ): Promise<OAuthClient | undefined>;
}
