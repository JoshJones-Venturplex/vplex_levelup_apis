import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SmoothiesModule } from './smoothies/smoothies.module';

@Module({
  imports: [SmoothiesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
