import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Task} from '../../models/task.model';
import {TaskService} from "../../services/task.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss'
})
export class TaskFormComponent implements OnInit {
  taskForm!: FormGroup;
  taskId!: number;
  currentTask: Task | undefined;

  constructor(private fb: FormBuilder, private taskService: TaskService, private router: Router, private activatedRouter: ActivatedRoute) {
    this.taskForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.taskId = this.activatedRouter.snapshot.params['id'];
    if (!!this.taskId) {
      this.currentTask = this.taskService.getTaskById(this.taskId);
      this.taskForm.setValue({title: this.currentTask?.title, description: this.currentTask?.description});
    }
  }

  onSubmit(): void {
    if (!!this.taskId){
      const editedTask: Task = {
        id: Number(this.taskId),
        title: this.taskForm.get('title')?.value,
        description: this.taskForm.get('description')?.value,
        completed: false
      };

      this.taskService.updateTask(editedTask);
    }
    else {
      const currentItem: Task = {
        title: this.taskForm.get('title')?.value,
        description: this.taskForm.get('description')?.value,
        completed: false
      }

      this.taskService.addTask(currentItem);
    }

    this.router.navigate(['task/list']);
  }
}
