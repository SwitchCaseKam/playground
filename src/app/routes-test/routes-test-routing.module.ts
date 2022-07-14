import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { RoutesTestComponent } from './routes-test.component';

const routes: Routes = [
  { path: '', component: RoutesTestComponent, pathMatch: 'full' },  
  { path: 'a', component: AComponent},
  { path: 'b', component: BComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutesTestRoutingModule { }
