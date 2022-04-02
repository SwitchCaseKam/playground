import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesComponent } from './pipes.component';
import { PipesRoutingModule } from './pipes-routing.module';
import { MyCustomPipePipe } from './custom-pipes/my-custom-pipe.pipe';
import { MergerPipePipe } from './custom-pipes/merger-pipe.pipe';
import { PipeChildComponent } from './pipe-child/pipe-child.component';



@NgModule({
  declarations: [
    PipesComponent,
    MyCustomPipePipe,
    MergerPipePipe,
    PipeChildComponent
  ],
  imports: [
    CommonModule,
    PipesRoutingModule
  ]
})
export class PipesModule { }
