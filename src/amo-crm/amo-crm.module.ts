import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AmoCrmService } from './amo-crm.service';
import { AmoCrmController } from './amo-crm.controller';

@Module({
  imports: [HttpModule],
  providers: [AmoCrmService],
  controllers: [AmoCrmController],
})
export class AmoCrmModule {}
