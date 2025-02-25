import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TaskContainerComponent} from "./components/task-container/task-container.component";
import {TaskListComponent} from "./components/task-list/task-list.component";
import {TaskFormComponent} from "./components/task-form/task-form.component";

const routes: Routes = [
  {
    path: '',
    component: TaskContainerComponent,
    children: [
      {path: 'list', component: TaskListComponent},
      {path: 'add', component: TaskFormComponent},
      {path: ':id', component: TaskFormComponent},
      {path: '', redirectTo: 'list', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule {
}
