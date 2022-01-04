import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypescriptLearnComponent } from './typescript-learn.component';

const routes: Routes = [
  { path: '', component: TypescriptLearnComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypescriptLearnRoutingModule { }
