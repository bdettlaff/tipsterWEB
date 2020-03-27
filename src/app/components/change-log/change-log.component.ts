import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material";
import {ChangeLogService} from "../../services/change-log-service/change-log.service";

@Component({
  selector: 'app-change-log',
  templateUrl: './change-log.component.html',
  styleUrls: ['./change-log.component.css']
})
export class ChangeLogComponent implements OnInit {

  changeLogWithDate: any;
  constructor(private changeLogService: ChangeLogService) { }

  ngOnInit() {
    this.getLastThreeChangeLogs();
  }

  getLastThreeChangeLogs() {
    this.changeLogService.getLastThreeChangeLogs().subscribe(
      data => {
        this.changeLogWithDate = data;
      },
      error => {
        console.log(error);
      },
      () => {
      }
    );
  }
}
