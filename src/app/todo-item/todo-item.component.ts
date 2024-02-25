import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent implements OnChanges {

  rutaCheck: string = '';

  @Input() task: string = '';
  @Output() onRemoveTodo = new EventEmitter<string>();

  ngOnChanges(): void {
    this.rutaCheck = '';
  }

  removeTodo(task: string) {
    this.onRemoveTodo.emit(task);
  }

}
