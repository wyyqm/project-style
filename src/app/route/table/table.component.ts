import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  constructor() {
    this.defaultColDef = {
      editable: true, //单元表格是否可编辑
      enableRowGroup: true,
      enablePivot: true,
      enableValue: true,
      sortable: true, //开启排序
      resizable: true, //是否可以调整列大小，就是拖动改变列大小
      filter: true, //开启刷选
    };
  }

  ngOnInit(): void {}
  title = 'app';

  public defaultColDef: any;

  columnDefs = [
    { headerName: '姓名', field: 'name', pinned: 'left' },
    { headerName: '性别', field: 'sex' },
    { headerName: '年龄', field: 'age' },
    { headerName: '籍贯', field: 'jg' },
    { headerName: '省份', field: 'sf' },
    { headerName: '地址', field: 'dz' },
  ];

  rowData = [
    {
      name: '张三',
      sex: '男',
      age: '100',
      jg: '中国',
      sf: '浙江',
      dz: '杭州市古墩路1号',
    },
    {
      name: '李四',
      sex: '女',
      age: '5',
      jg: '中国',
      sf: '浙江',
      dz: '杭州市古墩路12号',
    },
    {
      name: '王五',
      sex: '女',
      age: '20',
      jg: '中国',
      sf: '浙江',
      dz: '杭州市古墩路31号',
    },
    {
      name: '王五',
      sex: '女',
      age: '26',
      jg: '中国',
      sf: '浙江',
      dz: '杭州市古墩路111号',
    },
    {
      name: '王五',
      sex: '男',
      age: '35',
      jg: '中国',
      sf: '浙江',
      dz: '杭州市古墩路12号',
    },
    {
      name: '王五',
      sex: '男',
      age: '35',
      jg: '中国',
      sf: '浙江',
      dz: '杭州市古墩路12号',
    },
    {
      name: '王五',
      sex: '男',
      age: '35',
      jg: '中国',
      sf: '浙江',
      dz: '杭州市古墩路12号',
    },
    {
      name: '王五',
      sex: '男',
      age: '35',
      jg: '中国',
      sf: '浙江',
      dz: '杭州市古墩路12号',
    },
    {
      name: '王五',
      sex: '男',
      age: '35',
      jg: '中国',
      sf: '浙江',
      dz: '杭州市古墩路12号',
    },
    {
      name: '王五',
      sex: '男',
      age: '35',
      jg: '中国',
      sf: '浙江',
      dz: '杭州市古墩路12号',
    },
    {
      name: '王五',
      sex: '男',
      age: '35',
      jg: '中国',
      sf: '浙江',
      dz: '杭州市古墩路12号',
    },
    {
      name: '王五',
      sex: '男',
      age: '35',
      jg: '中国',
      sf: '浙江',
      dz: '杭州市古墩路12号',
    },
    {
      name: '王五',
      sex: '男',
      age: '35',
      jg: '中国',
      sf: '浙江',
      dz: '杭州市古墩路12号',
    },
    {
      name: '王五',
      sex: '男',
      age: '35',
      jg: '中国',
      sf: '浙江',
      dz: '杭州市古墩路12号',
    },
    {
      name: '王五',
      sex: '男',
      age: '35',
      jg: '中国',
      sf: '浙江',
      dz: '杭州市古墩路12号',
    },
  ];
}
