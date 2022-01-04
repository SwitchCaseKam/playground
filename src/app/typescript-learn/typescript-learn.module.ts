import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypescriptLearnComponent } from './typescript-learn.component';
import { TypescriptLearnRoutingModule } from './typescript-learn-routing.module';

@NgModule({
  declarations: [
    TypescriptLearnComponent
  ],
  imports: [
    CommonModule,
    TypescriptLearnRoutingModule
  ]
})
export class TypescriptLearnModule { }
