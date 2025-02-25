import {Component, OnInit} from '@angular/core';
import {TaskService} from "../../services/task.service";
import { Task } from '../../models/task.model';
import {Router} from "@angular/router";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent implements OnInit {
  tasksList!: Task[];

  constructor(private taskService: TaskService, private router: Router) {
  }

  ngOnInit(): void {
    console.log('aa')
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

  onEditTask(task: Task): void {
    this.router.navigate(['/task', task.id]);
  }

  onCreateTask(task: Task): void {
    this.taskService.addTask(task);
    this.reloadTasks();
  }

  onAddNewTask(): void {
    this.router.navigate(['task/add']);
  }

  private reloadTasks() {
    this.tasksList = this.taskService.getTasks();
    console.log(this.tasksList);
  }
}
