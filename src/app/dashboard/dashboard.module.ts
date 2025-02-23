import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {StatsComponent} from './components/stats/stats.component';
import {SettingsComponent} from './components/settings/settings.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    StatsComponent,
    SettingsComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  exports: [RouterModule]
})
export class DashboardModule {
}
