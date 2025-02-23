import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductListComponent} from "./product/product-list/product-list.component";
import {TaskContainerComponent} from "./task/task-container/task-container.component";
import {PageNotFoundComponent} from "./shared/components/page-not-found/page-not-found.component";
import {DashboardComponent} from "./dashboard/components/dashboard/dashboard.component";
import {StatsComponent} from "./dashboard/components/stats/stats.component";
import {SettingsComponent} from "./dashboard/components/settings/settings.component";
import {ProductDetailsComponent} from "./product/product-details/product-details.component";

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {
    path: 'dashboard', component: DashboardComponent, children: [
      {path: 'stats', component: StatsComponent},
      {path: 'settings', component: SettingsComponent},
      {path: '', redirectTo: 'stats', pathMatch: 'full'}
    ]
  },
  {path: 'product', component: ProductListComponent},
  { path: 'product/:id', component: ProductDetailsComponent },
  {path: 'task', component: TaskContainerComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
