import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardContainerComponent} from "./components/dashboard-container/dashboard-container.component";
import {StatsComponent} from "./components/stats/stats.component";
import {SettingsComponent} from "./components/settings/settings.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardContainerComponent,
    children: [
      {path: 'stats', component: StatsComponent},
      {path: 'settings', component: SettingsComponent},
      {path: '', redirectTo: 'stats', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
