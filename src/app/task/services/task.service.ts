import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

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

  getTaskById(id: number): Task | undefined {
    return this.taskList.find(task => task.id == id);
  }

  addTask(task: Task): void {
    task.id = Math.floor(Math.random() * 1000000);
    this.taskList.push(task);
  }

  updateTask(updatedTask: Task): void {
    this.taskList = this.taskList.map(task => {
      if (task.id == updatedTask.id) {
        return updatedTask;
      }

      return task;
    })
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
