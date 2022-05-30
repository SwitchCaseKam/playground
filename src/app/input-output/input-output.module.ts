import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputOutputRoutingModule } from './input-output-routing.module';
import { InputOutputComponent } from './input-output.component';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';
import { SampleA1Component } from './output/sample-a1/sample-a1.component';
import { SampleA2Component } from './output/sample-a1/sample-a2/sample-a2.component';
import { SampleA3Component } from './output/sample-a1/sample-a2/sample-a3/sample-a3.component';


@NgModule({
  declarations: [
    InputOutputComponent,
    InputComponent,
    OutputComponent,
    SampleA1Component,
    SampleA2Component,
    SampleA3Component
  ],
  imports: [
    CommonModule,
    InputOutputRoutingModule
  ]
})
export class InputOutputModule { }
