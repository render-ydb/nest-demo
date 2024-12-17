import { Injectable } from '@nestjs/common';
import { Todo } from './interface';

@Injectable()
export class TodoService {
  private todos: Todo[] = [];
  getTodo(id: string) {
    return this.todos.find((todo) => todo.id === id) || 'Todo not found';
  }

  createTodo(todo: Todo) {
    this.todos.push(todo);
    return 'Todo created';
  }

  deleteTodo(id: string) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    return 'Todo deleted';
  }
}
