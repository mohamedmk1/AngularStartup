import {NgModule} from '@angular/core';
import {TaskContainerComponent} from "./task-container/task-container.component";
import {TaskListComponent} from "./task-list/task-list.component";
import {TaskItemComponent} from "./task-item/task-item.component";
import {TaskFormComponent} from "./task-form/task-form.component";
import {SharedModule} from "../shared/shared.module";
import {RouterOutlet} from "@angular/router";
import {TaskRoutingModule} from "./task-routing.module";

@NgModule({
  declarations: [
    TaskContainerComponent,
    TaskListComponent,
    TaskItemComponent,
    TaskFormComponent
  ],
  exports: [
    TaskContainerComponent,
    TaskListComponent,
    TaskItemComponent,
    TaskFormComponent
  ],
  imports: [
    SharedModule,
    TaskRoutingModule
  ]
})
export class TaskModule {
}
