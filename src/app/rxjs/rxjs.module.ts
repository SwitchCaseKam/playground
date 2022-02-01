import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsRoutingModule } from './rxjs-routing.module';
import { RxjsComponent } from './rxjs.component';
import { SwitchMapMergeMapConcatMapExhaustMapComponent } from './switch-map-merge-map-concat-map-exhaust-map/switch-map-merge-map-concat-map-exhaust-map.component';

import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CombinationOperatorsComponent } from './combination-operators/combination-operators.component';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MulticastComponent } from './multicast/multicast.component';

@NgModule({
  declarations: [
    RxjsComponent,
    SwitchMapMergeMapConcatMapExhaustMapComponent,
    CombinationOperatorsComponent,
    MulticastComponent
  ],
  imports: [
    CommonModule,
    RxjsRoutingModule,
    MatListModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTooltipModule,
    MatCheckboxModule
  ]
})
export class RxjsModule { }
