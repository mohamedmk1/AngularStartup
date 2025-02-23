import {Component, OnInit} from '@angular/core';
import {TaskService} from "../task.service";
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {
  tasksList!: Task[];

  constructor(private taskService: TaskService) {
  }

  ngOnInit(): void {
    this.reloadTasks();
  }

  onDeleteTask(id: number) {
    this.taskService.deleteTask(id);
    this.reloadTasks();
  }

  onToggleTask(task: Task): void {
    task.completed = !task.completed;
    this.taskService.updateTask(task);
    this.reloadTasks();
  }

  onCreateTask(task: Task): void {
    this.taskService.addTask(task);
    this.reloadTasks();
  }

  private reloadTasks() {
    this.tasksList = this.taskService.getTasks();
  }
}
