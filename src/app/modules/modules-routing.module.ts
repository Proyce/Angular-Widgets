import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModulesHomeComponent } from './modules-home/modules-home.component';

const routes: Routes = [
  { path: 'modules', component: ModulesHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
