import { Controller, Get, Header, HttpCode, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';
import { TodoService } from './modules/todo/todo.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Header('Content-Type', 'application/json')
  @HttpCode(HttpStatus.OK)
  getHello() {
    return this.appService.getHello();
  }
}
