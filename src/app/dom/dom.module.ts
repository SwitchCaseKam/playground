import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DomRoutingModule } from './dom-routing.module';
import { DomComponent } from './dom.component';
import { Renderer2Component } from './renderer2/renderer2.component';
import { ElementRefComponent } from './element-ref/element-ref.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    DomComponent,
    Renderer2Component,
    ElementRefComponent
  ],
  imports: [
    CommonModule,
    DomRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule
  ]
})
export class DomModule { }
