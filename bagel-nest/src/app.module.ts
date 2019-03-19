import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BagelsService } from './bagels/bagels.service';
import { BagelsModule } from './bagels/bagels.module';

@Module({
  imports: [BagelsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
