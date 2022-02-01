import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsExampleComponent } from './forms-example.component';
import { LoadFormsComponent } from './load-forms/load-forms.component';
import { OwnValidatorsComponent } from './reactive-forms/own-validators/own-validators.component';
import { ValidatorsComponent } from './template-driven-forms/validators/validators.component';

const routes: Routes = [
  { path: '', component: FormsExampleComponent },
  { path: 'reactive', redirectTo: ''},
  { path: 'reactive/validators', component: OwnValidatorsComponent},
  { path: 'template-driven/example', component: ValidatorsComponent},
  { path: 'forms-strategies', component: LoadFormsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
