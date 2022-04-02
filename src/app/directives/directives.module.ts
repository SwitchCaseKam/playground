import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesComponent } from './directives.component';
import { ColorollyDirective } from './directives/colorolly.directive';
import { DirectivesRoutingModule } from './directives-routing.module';
import { HideAfterDirective } from './directives/hide-after.directive';
import { CustomValuePropertyDirective } from './directives/custom-value-property.directive';



@NgModule({
  declarations: [
    DirectivesComponent,
    ColorollyDirective,
    HideAfterDirective,
    CustomValuePropertyDirective
  ],
  imports: [
    CommonModule,
    DirectivesRoutingModule
  ]
})
export class DirectivesModule { }
