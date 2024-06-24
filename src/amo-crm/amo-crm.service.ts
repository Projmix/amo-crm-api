import { Injectable } from '@nestjs/common';
import {  HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AmoCrmService {
  private readonly baseURL: string;
  private readonly accessToken: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.baseURL = this.configService.get<string>('AMOCRM_BASE_URL');
    this.accessToken = this.configService.get<string>('AMOCRM_ACCESS_TOKEN');
  }

  async getLeads(query?: string) {
    const params = query ? { query } : {};
    const response = await this.httpService.get(`${this.baseURL}/api/v4/leads`, {
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
      params,
    }).toPromise();

    return response.data;
  }
  async getPipelines(query?: string) {
    const params = query ? { query } : {};
    const response = await this.httpService.get(`${this.baseURL}/api/v4/leads/pipelines`, {
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
      params,
    }).toPromise();

    return response.data;
  }
  async getUsers(query?: string) {
    const params = query ? { query } : {};
    const response = await this.httpService.get(`${this.baseURL}/api/v4/users`, {
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
      params,
    }).toPromise();

    return response.data;
  }
  async getСontacts(query?: string) {
    const params = query ? { query } : {};
    const response = await this.httpService.get(`${this.baseURL}/api/v4/contacts`, {
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
      params,
    }).toPromise();

    return response.data;
  }
}
