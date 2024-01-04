import { InjectionToken, Scope, Type } from '@nestjs/common';
import {
  ServerOptions
} from 'oauth2-server';
import { ModuleMetadata } from '@nestjs/common/interfaces';
import { Injectable } from '@nestjs/common';


export type IOAuth2ServerModuleOptions = Omit<ServerOptions, 'model'>;

export interface IOAuth2ServerOptionsFactory {
  createOAuth2ServerOptions(): IOAuth2ServerModuleOptions;
}

export interface IOAuth2ServerModuleAsyncOptions
  extends Pick<ModuleMetadata, 'imports'> {
  useClass?: Type<IOAuth2ServerOptionsFactory>;
  useExisting?: Type<IOAuth2ServerOptionsFactory>;
  useFactory?: (...args: unknown[]) => IOAuth2ServerModuleOptions;
  inject?: InjectionToken[];
  scope?: Scope;
}
