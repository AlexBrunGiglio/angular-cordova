import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

export interface TableData {
  order: number,
  name: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['order', 'name', 'action'];
  dataSource: TableData[] = [];
  tempTable: TableData[] = []
  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.tempTable = JSON.parse(localStorage.getItem('Table') as string);
    this.dataSource = this.tempTable.sort((a, b) => a.order - b.order);
  }

  openDialog(item: TableData) {
    console.log("🚀 ~ ListComponent ~ openDialog ~ item", item);
    const dialogRef = this.dialog.open(DialogComponent, { data: item });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        localStorage.removeItem('Table');
        localStorage.setItem('Table', JSON.stringify(this.dataSource));
      }
    });
  }
}
