import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shared-table',
  templateUrl: './shared-table.component.html',
  styleUrls: ['./shared-table.component.scss'],
})
export class SharedTableComponent implements OnInit {
  LocalData: any;
  @Input() columnList: any;
  @Input() dataSource: any;
  @Input() isPagination: boolean = false;
  @Input() isManageColumn: boolean = false;
  @Output() actionList = new EventEmitter();

  options = [10, 20, 30, 40];
  selectedEntryOption = 10;
  sortOrder = 'asc';
  sortColumn = '';
  page: number = 1;
  totalRecords: any;
  searchText: any;
  filterInput = false;
  manageFilter: boolean = false;
  manageShowHide: any = [];
  filterType: string = '';

  constructor() {}
  defaultColumn: any;

  ngOnInit(): void {
    this.LocalData = this.dataSource;
    this.getColumns();
  }

  onSelectedOption(e: any) {
    this.selectedEntryOption = e.target.value;
    this.dataSource = [...this.LocalData.slice(0, this.selectedEntryOption)];
  }




  //min-width:130px
  //width: 100%
  getColumns() {
    this.defaultColumn = this.columnList.filter((item: any) => {
      return item.isDisabled === false;
    });
  }

  ngAfterContentInit() {
    this.totalRecords = this.LocalData.length;
  }

  sort(column: string) {
    if (column === this.sortColumn) {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortOrder = 'asc';
    }
    this.dataSource.sort((a: any, b: any) => {
      if (a[column] < b[column]) {
        return this.sortOrder === 'asc' ? -1 : 1;
      } else if (a[column] > b[column]) {
        return this.sortOrder === 'asc' ? 1 : -1;
      } else {
        return 0;
      }
    });
  }

  getSortIcon(column: string) {
    if (column === this.sortColumn) {
      return this.sortOrder === 'asc' ? 'fa fa-sort-asc' : 'fa fa-sort-desc';
    } else {
      return 'fa fa-sort';
    }
  }

  openInput(e: any, key: string) {
    this.searchText = '';
    this.filterType = key;
    this.filterInput = true;
  }
  close(e: any) {
    this.filterType = '';
    this.manageFilter = false;
  }

  isShowHide(data: any) {
    let dataDefault = this.defaultColumn.some(
      (item: any) => item.key == data.key
    );
    if (dataDefault) {
      this.defaultColumn = this.defaultColumn.filter(
        (item: any) => item.key !== data.key
      );
    } else {
      this.defaultColumn.push(data);
      this.defaultColumn.map((element: any, index: any) => {
        if (element.key === 'actions') {
          this.defaultColumn.splice(index, 1);
          this.defaultColumn.push(element);
        }
      });
    }
  }

  paginationChange(e: any) {}

  manageColumn(e: any) {
    this.manageFilter = true;
  }

  performAction(action: any) {
    this.actionList.emit(action);
  }
}
