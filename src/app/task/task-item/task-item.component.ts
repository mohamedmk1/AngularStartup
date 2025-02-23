import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Task} from '../models/task.model';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() deleteTask = new EventEmitter<number>();
  @Output() toggle = new EventEmitter<Task>();

  onToggle(): void {
    this.toggle.emit(this.task);
  }

  onDelete(): void {
    this.deleteTask.emit(this.task.id);
  }
}
