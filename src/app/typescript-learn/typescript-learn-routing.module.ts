import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlgorithmsComponent } from './algorithms/algorithms.component';
import { TypescriptLearnComponent } from './typescript-learn.component';

const routes: Routes = [
  { path: '', component: TypescriptLearnComponent },
  { path: 'algorithms', component: AlgorithmsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypescriptLearnRoutingModule { }
