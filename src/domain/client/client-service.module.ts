import { Module } from '@nestjs/common';
import { ClientService } from '../client/client.service';
// import { ClientRepositoryModule } from '../client/client-repository.module';

@Module({
  // imports: [ClientRepositoryModule],
  providers: [ClientService],
  exports: [ClientService],
})
export class ClientServiceModule {}
