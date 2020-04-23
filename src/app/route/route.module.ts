import { DynamicColumnWidthDirective } from './../shared/dynamic-column-width.directivej';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteRoutingModule } from './route-routing.module';
import { ShowComponent } from './show/show.component';
import { SharedModule } from '../shared/shared.module';
import { TableComponent } from './table/table.component';
import { AgGridModule } from 'ag-grid-angular';
import { Table2Component } from './table2/table2.component';
// import { EasyTableComponent } from './easy-table/easy-table.component';

@NgModule({
  declarations: [
    ShowComponent,
    TableComponent,
    Table2Component,
    DynamicColumnWidthDirective,
    // EasyTableComponent,
  ],
  imports: [CommonModule, RouteRoutingModule, SharedModule, AgGridModule],
})
export class RouteModule {}
