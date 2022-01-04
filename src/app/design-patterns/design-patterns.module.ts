import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignPatternsComponent } from './design-patterns.component';
import { DesignPatternsRoutingModule } from './design-patterns-routing.module';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { FactoryMethodComponent } from './creational-patterns/factory-method/factory-method.component';
import { AbstractFactoryComponent } from './creational-patterns/abstract-factory/abstract-factory.component';
import { BuilderComponent } from './creational-patterns/builder/builder.component';
import { FacadeComponent } from './structural-patterns/facade/facade.component';
import { DecoratorComponent } from './structural-patterns/decorator/decorator.component';



@NgModule({
  declarations: [
    DesignPatternsComponent,
    FactoryMethodComponent,
    AbstractFactoryComponent,
    BuilderComponent,
    FacadeComponent,
    DecoratorComponent
  ],
  imports: [
    DesignPatternsRoutingModule,
    CommonModule,
    MatListModule,
    FormsModule,
  ]
})
export class DesignPatternsModule { }
