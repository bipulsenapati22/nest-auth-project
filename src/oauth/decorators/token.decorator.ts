import {
    UseGuards,
    SetMetadata,
    applyDecorators,
    ExecutionContext,
    createParamDecorator,
  } from '@nestjs/common';
  import { AuthorizeOptions } from 'oauth2-server';
import { OAuth2ServerTokenGuard } from '../guards/token.guard';

  export const OAUTH2_METHOD_OPTIONS_METADATA = Symbol(
    'OAUTH2_METHOD_OPTIONS_METADATA',
  );
  
  export const OAuth2RenewToken = (
    options?: AuthorizeOptions,
  ): ClassDecorator & MethodDecorator =>
    applyDecorators(
      SetMetadata(OAUTH2_METHOD_OPTIONS_METADATA, options),
      UseGuards(OAuth2ServerTokenGuard),
    );
  
  export const OAuth2Token = createParamDecorator(
    (_: unknown, context: ExecutionContext) =>
      context.switchToHttp().getRequest().oauth?.token,
  );
  