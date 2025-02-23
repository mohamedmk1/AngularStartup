import { Injectable } from '@angular/core';
import { Task } from './models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private taskList: Task[] = [{
    id: 1,
    title: 'tache 1',
    description: 'desc tache 1',
    completed: false
  },
    {
      id: 2,
      title: 'tache 2',
      description: 'desc tache 2',
      completed: true
    }];

  constructor() {}

  getTasks(): Task[] {
    return this.taskList;
  }

  addTask(task: Task): void {
    console.log(task);
    task.id = Math.floor(Math.random() * 1000000);
    this.taskList.push(task);
  }

  updateTask(updatedTask: Task): boolean {
    const index = this.taskList.findIndex(t => t.id === updatedTask.id);
    if (index !== -1) {
      this.taskList[index] = updatedTask;
      return true;
    }
    return false;
  }

  deleteTask(id: number): void {
    this.taskList = this.taskList.filter(task => task.id !== id);
  }

  filterTasks(status: string): Task[] {
    if (status === 'completed') return this.taskList.filter(t => t.completed);
    if (status === 'pending') return this.taskList.filter(t => !t.completed);
    return this.taskList; // Show all
  }
}
