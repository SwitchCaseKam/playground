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
import { LoadFormsComponent } from './load-forms/load-forms.component';
import { FormCreatorComponent } from './load-forms/form-creator/form-creator.component';
import { MatSelectModule } from '@angular/material/select';
import { CarFormComponent } from './load-forms/forms-strategies/car-form/car-form.component';
import { HouseFormComponent } from './load-forms/forms-strategies/house-form/house-form.component';
import { PersonFormComponent } from './load-forms/forms-strategies/person-form/person-form.component';

@NgModule({
  declarations: [
    FormsExampleComponent,
    OwnValidatorsComponent,
    ValidatorsComponent,
    LoadFormsComponent,
    FormCreatorComponent,
    CarFormComponent,
    HouseFormComponent,
    PersonFormComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  entryComponents: [
    CarFormComponent,
    HouseFormComponent,
    PersonFormComponent
  ]
})
export class FormsExampleModule { }
