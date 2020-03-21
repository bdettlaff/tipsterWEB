import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ModulesListComponent} from './components/modules-list/modules-list.component';
import { AddChangeLogComponent } from './components/add-change-log/add-change-log.component';
import { ChangeLogListComponent } from './components/change-log-list/change-log-list.component';


const routes: Routes = [
  {path: '', redirectTo: 'module-list', pathMatch: 'full'},
  {path: 'module-list', component: ModulesListComponent},
  {path: 'add-change-log', component: AddChangeLogComponent},
  {path: 'change-log-list', component: ChangeLogListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
