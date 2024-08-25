import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/bfhl")
  getResponse()  { 
    return this.appService.getResponse(); 
  }

  @Post("/bfhl")
  submitSomething(@Body() body: { data: string[] }) { 
    return this.appService.postResponse(body.data); 
  }
}
