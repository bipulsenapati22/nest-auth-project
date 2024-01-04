import { Injectable } from '@nestjs/common';
import { OAuthClient } from './client.domain';
// import { IClientRepository } from './iclient.repository';
import { omit } from 'lodash';

export interface GetClientFilter {
  clientId: string;
  clientSecret?: string;
  grantType?: string;
}

@Injectable()
export class ClientService {
  constructor(
    // private clientRepository: IClientRepository
  ) { }

  async getClientListWithPagination(
    where: Record<string, string> | undefined,
    take: number,
    skip: number,
  ) {
    // return this.clientRepository.findClients(where, take, skip);
  }

  async createClient(body: Partial<OAuthClient>) {
    // return this.clientRepository.createClient(body);
  }

  async updateClient(body: Partial<OAuthClient>) {
    // return this.clientRepository.updateClient(body);
  }

  async getClient(filter: GetClientFilter) {
    return {
      id: 998812345572,
      // clientId: "L7C9YKV9-ESF3606Q-GHF9H1F5-8LJMKRO5",
      // redirectUris: "GTD4rLPMMOPSiRQPIJJ3LRV42rMfwwRc",
      // grants: ["authorization_code"]
    };
  }

  async getClientByClientIdAndClientSecret(filter: GetClientFilter) {
    // return this.clientRepository.getClientByFilter(filter);
  }

  async getClientByName(clientName: string) {
    // return this.clientRepository.getClientByName(clientName);
  }
}
