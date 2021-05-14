import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './Component/dashboard/dashboard.component';
import {GridComponent} from './Component/grid/grid.component';

const routes: Routes = [
  {path: 'dashboard/:code', component: DashboardComponent},
  {path: 'grid', component: GridComponent},
  {path: '', redirectTo: '/grid', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
