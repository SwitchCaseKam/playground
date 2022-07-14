import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AComponent } from '../pages/a/a.component';
import { BComponent } from '../pages/b/b.component';
import { RoutesComponent } from './routes.component';

const routes: Routes = [
  {path: 'a', component: AComponent},
  {path: 'b', component: BComponent},
  {path: '', component: RoutesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
