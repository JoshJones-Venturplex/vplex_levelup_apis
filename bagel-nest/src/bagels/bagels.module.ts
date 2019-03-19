import { Module } from '@nestjs/common';
import { BagelsController } from './bagels.controller';
import { BagelsService } from './bagels.service';
import { bagelsProviders } from './bagels.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [BagelsController],
  providers: [BagelsService, ...bagelsProviders],
})
export class BagelsModule {}