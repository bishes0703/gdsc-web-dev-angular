import { Component, ElementRef, ViewChild } from '@angular/core';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [TodoItemComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  tasks: string[] = [];

  @ViewChild('inputTask') inputTask: ElementRef = new ElementRef({});


  addItem(task:string){
    const input = this.inputTask.nativeElement;
    this.tasks.push(task);
    input.value = '';
    input.focus();
  }

  onRemoveTodo(task: string) {
    this.tasks = this.tasks.filter((item) => item != task);
  }
}   
