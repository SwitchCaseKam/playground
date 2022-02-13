import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CssRoutingModule } from './css-routing.module';
import { CssComponent } from './css.component';


@NgModule({
  declarations: [
    CssComponent
  ],
  imports: [
    CommonModule,
    CssRoutingModule
  ]
})
export class CssModule { }
