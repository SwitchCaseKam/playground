import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutesRoutingModule } from './routes-routing.module';
import { AComponent } from '../pages/a/a.component';
import { BComponent } from '../pages/b/b.component';
import { RoutesComponent } from './routes.component';


@NgModule({
  declarations: [
    AComponent,
    BComponent,
    RoutesComponent
  ],
  imports: [
    CommonModule,
    RoutesRoutingModule
  ]
})
export class RoutesModule { }
