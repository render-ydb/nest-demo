import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  Res,
  HttpStatus,
  HttpCode,
  ParseIntPipe,
} from '@nestjs/common';
import { Response } from 'express';
import { TodoService } from './todo.service';
import { Todo } from './interface';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}
  @Get(':id')
  async getTodo(@Param('id', ParseIntPipe) id: number): Promise<Todo | string> {
    return this.todoService.getTodo(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  createTodo(@Body() createTodoDto: Todo): string {
    return this.todoService.createTodo(createTodoDto);
  }

  @Delete(':id')
  deleteTodo(@Param('id', ParseIntPipe) id: number): string {
    return this.todoService.deleteTodo(id);
  }
}
