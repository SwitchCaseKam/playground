import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeDetectionComponent } from './change-detection.component';
import { OnPushComponent } from './on-push/on-push.component';
import { TopoComponent } from './topo/topo.component';

const routes: Routes = [
  { path: '', component: ChangeDetectionComponent },
  { path: 'on-push', component: OnPushComponent },
  { path: 'topo', component: TopoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChangeDetectionRoutingModule { }
