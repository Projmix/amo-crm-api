import { Controller, Get, Query } from '@nestjs/common';
import { AmoCrmService } from './amo-crm.service';

@Controller('api')
export class AmoCrmController {
  constructor(private readonly amoCrmService: AmoCrmService) {}

  @Get('leads')
  async getLeads(@Query('query') query: string) {
    return this.amoCrmService.getLeads(query);
  }

  @Get('pipelines')
  async getPipelines() {
    return this.amoCrmService.getPipelines();
  }

  @Get('users')
  async getUsers() {
    return this.amoCrmService.getUsers();
  }

  @Get('contacts')
  async getСontacts() {
    return this.amoCrmService.getСontacts();
  }
}
