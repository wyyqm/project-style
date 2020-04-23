import { DynamicColumnWidthDirective } from './shared/dynamic-column-width.directivej';
import { RouteModule } from './route/route.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';

import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { AgGridModule } from 'ag-grid-angular';
// import { EasyUIModule } from 'ng-easyui/components/easyui/easyui.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouteModule,
    RouterModule,
    SharedModule,
    // EasyUIModule,
    AgGridModule.withComponents([]),
  ],
  providers: [],
  // bootstrap: [AppComponent],
  entryComponents: [AppComponent],
  exports: [NgZorroAntdModule],
})
export class AppModule {
  ngDoBootstrap(appRef: ApplicationRef) {
    appRef.bootstrap(AppComponent);
  }
  // ngDoBootstrap(appRef: ApplicationRef) {

  // }
}
