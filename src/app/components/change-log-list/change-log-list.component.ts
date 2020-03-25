import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material";
import {ChangeLogWithDate} from "../../dtos/ChangeLogWithDate";
import {ChangeLogService} from "../../services/change-log-service/change-log.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-change-log-list',
  templateUrl: './change-log-list.component.html',
  styleUrls: ['./change-log-list.component.css']
})

export class ChangeLogListComponent implements OnInit {

  displayedColumns: string[] = ['title', 'date', 'content'];
  dataSource: MatTableDataSource<ChangeLogWithDate>;
  changeLogWithDate: any;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private changeLogService: ChangeLogService, public router: Router) { }

  ngOnInit() {
    this.getChangeLogWithDateList();
  }

  getChangeLogWithDateList() {
    this.changeLogService.getAllChangeLogs().subscribe(
      data => {
        this.changeLogWithDate = data;
      },
      error => {
        console.log(error);
      },
      () => {
        this.dataSource = new MatTableDataSource(this.changeLogWithDate);
      }
    );
  }



}
