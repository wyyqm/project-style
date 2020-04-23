import { RouteService } from './../route.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table2',
  templateUrl: './table2.component.html',
  styleUrls: ['./table2.component.css'],
})
export class Table2Component implements OnInit {
  public tableDatas: Array<Object> = [];

  // 等待动画
  public loading: boolean = false;
  // 分页配置
  public currentPage: number = 1;
  public itemsPerpage: number = 5;
  public totalItems: number = 0;
  constructor(private tableDataService: RouteService) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    // 从服务器查询表格数据
    let result = this.tableDataService.getTableData(
      this.currentPage,
      this.itemsPerpage
    );
    console.log('result:', result);
    this.totalItems = result['totalCounts'];
    this.tableDatas = result['list'];
  }
}
