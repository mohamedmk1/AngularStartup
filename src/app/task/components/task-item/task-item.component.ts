import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  standalone: false,
  styleUrl: './task-item.component.scss'
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() deleteTask = new EventEmitter<number>();
  @Output() toggle = new EventEmitter<Task>();
  @Output() editTask = new EventEmitter<Task>();

  onToggle(): void {
    this.toggle.emit(this.task);
  }

  onEdit(): void {
    this.editTask.emit(this.task);
  }

  onDelete(): void {
    this.deleteTask.emit(this.task.id);
  }
}
