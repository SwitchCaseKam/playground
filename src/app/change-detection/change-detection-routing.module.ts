import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeDetectionComponent } from './change-detection.component';
import { OnPushComponent } from './on-push/on-push.component';

const routes: Routes = [
  { path: '', component: ChangeDetectionComponent },
  { path: 'on-push', component: OnPushComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChangeDetectionRoutingModule { }
