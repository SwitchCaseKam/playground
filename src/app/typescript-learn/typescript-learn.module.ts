import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypescriptLearnComponent } from './typescript-learn.component';
import { TypescriptLearnRoutingModule } from './typescript-learn-routing.module';
import { AlgorithmsComponent } from './algorithms/algorithms.component';

@NgModule({
  declarations: [
    TypescriptLearnComponent,
    AlgorithmsComponent
  ],
  imports: [
    CommonModule,
    TypescriptLearnRoutingModule
  ]
})
export class TypescriptLearnModule { }
