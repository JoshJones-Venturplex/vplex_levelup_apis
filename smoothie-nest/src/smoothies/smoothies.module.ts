import { Module } from '@nestjs/common';
import { SmoothiesController } from './smoothies.controller';
import { SmoothiesService } from './smoothies.service';
import { smoothiesProviders } from './smoothies.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [SmoothiesController],
  providers: [SmoothiesService, ...smoothiesProviders],
})
export class SmoothiesModule {}