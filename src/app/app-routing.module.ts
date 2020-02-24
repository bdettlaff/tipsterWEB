import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ModulesListComponent} from "./components/modules-list/modules-list.component";


const routes: Routes = [
  {path: '', redirectTo: 'module-list', pathMatch: 'full'},
  {path: 'module-list', component: ModulesListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
