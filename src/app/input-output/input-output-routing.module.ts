import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputOutputComponent } from './input-output.component';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';

const routes: Routes = [
  { path: 'input', component: InputComponent },
  { path: 'output', component: OutputComponent },
  { path: '', component: InputOutputComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InputOutputRoutingModule { }
