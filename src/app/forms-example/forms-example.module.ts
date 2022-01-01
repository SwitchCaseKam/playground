import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-example-routing.module';
import { FormsExampleComponent } from './forms-example.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { OwnValidatorsComponent } from './reactive-forms/own-validators/own-validators.component';
import { ValidatorsComponent } from './template-driven-forms/validators/validators.component';


@NgModule({
  declarations: [
    FormsExampleComponent,
    OwnValidatorsComponent,
    ValidatorsComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    
  ]
})
export class FormsExampleModule { }
