import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CssRoutingModule } from './css-routing.module';
import { CssComponent } from './css.component';
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';


@NgModule({
  declarations: [
    CssComponent,
    DragAndDropComponent
  ],
  imports: [
    CommonModule,
    CssRoutingModule
  ]
})
export class CssModule { }
