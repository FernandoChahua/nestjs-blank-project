import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('api/test')
  getTest1(){
    return {
      message: 'Hola soy api/test1 :D.'
    };
  }

  @Get('api/prod')
  getProd(){
    return {
      message: 'Hola soy api/prod :D.'
    };
  }
}
