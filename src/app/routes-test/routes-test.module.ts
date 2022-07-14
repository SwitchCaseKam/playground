import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutesTestRoutingModule } from './routes-test-routing.module';
import { RoutesTestComponent } from './routes-test.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';


@NgModule({
  declarations: [
    RoutesTestComponent,
    AComponent,
    BComponent
  ],
  imports: [
    CommonModule,
    RoutesTestRoutingModule
  ]
})
export class RoutesTestModule { }
