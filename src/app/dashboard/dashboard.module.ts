import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardContainerComponent } from './components/dashboard-container/dashboard-container.component';
import { StatsComponent } from './components/stats/stats.component';
import { SettingsComponent } from './components/settings/settings.component';


@NgModule({
  declarations: [
    DashboardContainerComponent,
    StatsComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  exports: [
    DashboardContainerComponent,
    StatsComponent,
    SettingsComponent
  ]
})
export class DashboardModule { }
