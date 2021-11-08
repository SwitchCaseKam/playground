import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsComponent } from './rxjs.component';
import { SwitchMapMergeMapConcatMapExhaustMapComponent } from './switch-map-merge-map-concat-map-exhaust-map/switch-map-merge-map-concat-map-exhaust-map.component';

const routes: Routes = [
  { path: '', component: RxjsComponent },
  { path: 'switchMap-mergeMap-concatMap-exhaustMap', component: SwitchMapMergeMapConcatMapExhaustMapComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsRoutingModule { }
