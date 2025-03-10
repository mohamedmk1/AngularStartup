import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {StatsComponent} from "./components/stats/stats.component";
import {SettingsComponent} from "./components/settings/settings.component";

const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      {path: 'stats', component: StatsComponent},
      {path: 'settings', component: SettingsComponent},
      {path: '', redirectTo: 'stats', pathMatch: 'full'}
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
