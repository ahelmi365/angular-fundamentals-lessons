import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Building a TODO List</h1>
    <p>Total number of completed tasks: {{ totalCompleted }}</p>
    @for (todo of todos(); track todo.id) {
    <label
      for="{{ todo.id }}"
      [ngStyle]="{
        'text-decoration': todo.completed ? 'line-through' : 'none'
      }"
    >
      <input
        type="checkbox"
        name="{{ todo.title }}"
        id="{{ todo.id }}"
        (change)="updateTodo(todo)"
        (change)="conutCompletedItems(this.todos())"
      />
      {{ todo.title }}
    </label>

    }
  `,
  styles: `label { display: block }`,
})
export class AppComponent {
  todos = signal<Todo[]>([
    {
      id: 1,
      title: 'Learn Angular',
      completed: false,
    },
    {
      id: 2,
      title: 'Learn TypeScript',
      completed: false,
    },
    {
      id: 3,
      title: 'Learn RxJS',
      completed: false,
    },
  ]);
  totalCompleted: number = 0;
  updateTodo(todo: Todo) {
    // todo.completed = !todo.completed;
    this.todos.update((todos) => {
      const uddated = todos.map((itme) => {
        if (itme.id === todo.id) {
          itme.completed = !itme.completed;
        }
        return itme;
      });

      return uddated;
    });
  }

  conutCompletedItems(todos: Todo[]) {
    this.totalCompleted = todos.reduce((previous, current) => {
      return current.completed ? previous + 1 : previous;
    }, 0);
  }
}
