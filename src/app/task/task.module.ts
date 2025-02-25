import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TaskRoutingModule} from './task-routing.module';
import {TaskContainerComponent} from './components/task-container/task-container.component';
import {TaskListComponent} from './components/task-list/task-list.component';
import {TaskFormComponent} from './components/task-form/task-form.component';
import {TaskItemComponent} from './components/task-item/task-item.component';
import {MatFormField} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    TaskContainerComponent,
    TaskListComponent,
    TaskFormComponent,
    TaskItemComponent
  ],
  exports: [
    TaskContainerComponent,
    TaskListComponent,
    TaskFormComponent,
    TaskItemComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    SharedModule
  ]
})
export class TaskModule { }
