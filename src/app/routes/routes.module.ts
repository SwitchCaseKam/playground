import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutesComponent } from './routes.component';
import { RoutesRoutingModule } from './routes-routing.module';
import { AComponent } from './pages/a/a.component';
import { BComponent } from './pages/b/b.component';



@NgModule({
  declarations: [
    RoutesComponent,
    AComponent,
    BComponent
  ],
  imports: [
    CommonModule,
    RoutesRoutingModule
  ]
})
export class RoutesModule { }
