import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangeDetectionRoutingModule } from './change-detection-routing.module';
import { ChangeDetectionComponent } from './change-detection.component';
import { OnPushComponent } from './on-push/on-push.component';
import { MatListModule } from '@angular/material/list';
import { ParentComponent } from './on-push/parent/parent.component';
import { ChildComponent } from './on-push/child/child.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    ChangeDetectionComponent,
    OnPushComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    ChangeDetectionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
  ]
})
export class ChangeDetectionModule { }
