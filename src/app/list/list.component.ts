import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
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
  @ViewChild(MatTable)
  table!: MatTable<TableData>;
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
      if (result.name) {
        this.editLocalStorage();
      }
    });
  }

  addItem() {
    let item: TableData;
    item = {} as any;
    const dialogRef = this.dialog.open(DialogComponent, { data: item });
    dialogRef.afterClosed().subscribe(result => {
      console.log("🚀 ~ ListComponent ~ dialogRef.afterClosed ~ result", result);
      if (result.name) {
        console.log("🚀 ~ ListComponent ~ dialogRef.afterClosed ~ this.dataSource", this.dataSource);
        this.dataSource.push(result);
        this.editLocalStorage();
        this.table.renderRows();
      }
    });
  }

  removeItem(item: TableData) {
    const index = this.dataSource.findIndex(x => x.name === item.name);
    this.dataSource.splice(index, 1);
    this.editLocalStorage();
    this.table.renderRows();
  }

  editLocalStorage() {
    localStorage.removeItem('Table');
    localStorage.setItem('Table', JSON.stringify(this.dataSource));
  }
}
