import { Table2Component } from './table2/table2.component';
import { TableComponent } from './table/table.component';
import { ShowComponent } from './show/show.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'show', component: ShowComponent },
  { path: 'table', component: TableComponent },
  { path: 'table2', component: Table2Component },
  { path: 'easy', component: Table2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RouteRoutingModule {}
