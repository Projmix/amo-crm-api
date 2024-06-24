// src/app.module.ts
import { Module } from '@nestjs/common';
import { AppConfigModule } from './config/config.module';
import { AmoCrmModule } from './amo-crm/amo-crm.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [AppConfigModule, AmoCrmModule, ConfigModule],
})
export class AppModule {}
