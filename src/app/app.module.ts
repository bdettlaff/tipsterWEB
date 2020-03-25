import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModulesListComponent } from './components/modules-list/modules-list.component';
import { ChangeLogComponent } from './components/change-log/change-log.component';
import { AlertModule } from 'ngx-bootstrap';
import { AddChangeLogComponent } from './components/add-change-log/add-change-log.component';
import { ChangeLogListComponent } from './components/change-log-list/change-log-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule, MatButtonToggleModule, MatInputModule, MatTableModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [
    AppComponent,
    ModulesListComponent,
    ChangeLogComponent,
    AddChangeLogComponent,
    ChangeLogListComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatButtonToggleModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
