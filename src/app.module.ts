import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SnacksController } from './snacks/snacks.controller';
import { SnacksService } from './snacks/snacks.service';

@Module({
  imports: [],
  controllers: [AppController, SnacksController],
  providers: [AppService, SnacksService],
})
export class AppModule {}
