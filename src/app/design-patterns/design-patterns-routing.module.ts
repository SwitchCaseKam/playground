import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbstractFactoryComponent } from './creational-patterns/abstract-factory/abstract-factory.component';
import { BuilderComponent } from './creational-patterns/builder/builder.component';
import { FactoryMethodComponent } from './creational-patterns/factory-method/factory-method.component';
import { DesignPatternsComponent } from './design-patterns.component';

const routes: Routes = [
  { path: '', component: DesignPatternsComponent },
  { path: 'creational-patterns/builder', component: BuilderComponent },
  { path: 'creational-patterns/abstract-factory', component: AbstractFactoryComponent },
  { path: 'creational-patterns/factory-method', component: FactoryMethodComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignPatternsRoutingModule { }
