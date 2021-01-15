import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { ModulesHomeComponent } from './modules-home/modules-home.component';


@NgModule({
  declarations: [ModulesHomeComponent],
  imports: [
    CommonModule,
    ModulesRoutingModule
  ],
  exports: [ModulesHomeComponent]
})
export class ModulesModule { }
