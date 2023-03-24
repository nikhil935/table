import { Component, OnInit } from '@angular/core';
import { IColumnList } from 'src/app/Interfaces/interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  performAction(action: any) {
    switch (action.label) {
      case 'Edit':
        window.alert('edit action');
        break;
      case 'Delete':
        window.alert('Delete action');
        break;
      case 'View':
        window.alert('View action');
        break;
    }
  }

  columnList:IColumnList[] =[ 
    {
      key: 'name',
      label: 'Full Name',
      isSort: true,
      isFilter: true,
      isDisabled: false,
    },
    {
      key: 'age',
      label: 'Age',
      isSort: true,
      isFilter: false,
      isDisabled: false,
    },
    {
      key: 'country',
      label: 'country',
      isSort: true,
      isFilter: false,
      isDisabled: false,
    },
    {
      key: 'address',
      label: 'Address',
      isSort: true,
      isFilter: false,
      isDisabled: false,
      style: {
        width: '80rem',
      },
    },
    {
      key: 'actions',
      label: 'Action',
      isSort: false,
      isFilter: false,
      isDisabled: false,
      data: [
        { label: 'Edit', icon: 'fa fa-pencil-square-o', isEnabled: true }, //done
        { label: 'Delete', icon: 'fa fa-trash-o', isEnabled: false },
        { label: 'View', icon: 'fa fa-eye', isEnabled: false },
      ],
    },
  ];
  dataSource = [
    { name: 'Nikhil', age: 10, country: 'USA' },
    { name: 'Bob', age: 20, country: 'Canada' },
    { name: 'Charlie', age: 30, country: 'UK' },
    { name: 'Dave', age: 35, country: 'Australia' },
    { name: 'Alice', age: 40, country: 'USA' },
    { name: 'Bob', age: 30, country: 'Canada' },
    { name: 'Charlie', age: 20, country: 'UK' },
    { name: 'Dave', age: 35, country: 'Australia' },
    { name: 'Alice', age: 25, country: 'USA' },
    { name: 'Bob', age: 30, country: 'Canada' },
    { name: 'Charlie', age: 20, country: 'UK' },
    { name: 'Dave', age: 35, country: 'Australia' },
    { name: 'Alice', age: 25, country: 'USA' },
    { name: 'Bob', age: 30, country: 'Canada' },
    { name: 'Charlie', age: 20, country: 'UK' },
    { name: 'Dave', age: 35, country: 'Australia' },
    { name: 'Alice', age: 25, country: 'USA' },
    { name: 'Bob', age: 30, country: 'Canada' },
    { name: 'Charlie', age: 20, country: 'UK' },
    { name: 'Dave', age: 35, country: 'Australia' },
    { name: 'Alice', age: 25, country: 'USA' },
    { name: 'Bob', age: 30, country: 'Canada' },
    { name: 'Charlie', age: 20, country: 'UK' },
    { name: 'Dave', age: 35, country: 'Australia' },
    { name: 'Alice', age: 25, country: 'USA' },
    { name: 'Bob', age: 30, country: 'Canada' },
    { name: 'Charlie', age: 20, country: 'UK' },
    { name: 'Dave', age: 35, country: 'Australia' },
    { name: 'Alice', age: 25, country: 'USA' },
    { name: 'Bob', age: 30, country: 'Canada' },
    { name: 'Charlie', age: 20, country: 'UK' },
    { name: 'Dave', age: 35, country: 'Australia' },
    { name: 'Alice', age: 25, country: 'USA' },
    { name: 'Bob', age: 30, country: 'Canada' },
    { name: 'Charlie', age: 20, country: 'UK' },
    { name: 'Dave', age: 35, country: 'Australia' },
    { name: 'Alice', age: 25, country: 'USA' },
    { name: 'Charlie', age: 20, country: 'UK' },
    { name: 'Dave', age: 35, country: 'Australia' },
    { name: 'Alice', age: 25, country: 'USA' },
  ];
}
