import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AddChangeLogDto} from 'src/app/dtos/AddChangeLogDto';
import { ChangeLogWithDate} from 'src/app/dtos/ChangeLogWithDate';
import {add} from "ngx-bootstrap/chronos";

const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'OPTIONS, GET, PUT, PATCH, POST, DELETE',
      'Access-Control-Allow-Headers': 'Access-Control-Allow-Origin, Content-Type, Accept, Accept-Language, Origin, User-Agent'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ChangeLogService {

  constructor(private http: HttpClient) { }

  localUrl = 'http://localhost:2137';

  addChangeLog(addChangeLogDto: AddChangeLogDto): Observable<AddChangeLogDto> {
    return this.http.post<AddChangeLogDto>(this.localUrl + '/changelog/add', addChangeLogDto, httpOptions);
  }

  getAllChangeLogs(): Observable<ChangeLogWithDate[]> {
    return this.http.get<ChangeLogWithDate[]>(this.localUrl + '/changelog/get/list', httpOptions);
  }

  deleteChangeLogs(changeLogId: number): Observable<number> {
    return this.http.post<number>(this.localUrl + '/changelog/delete/' + changeLogId, httpOptions);
  }
}
