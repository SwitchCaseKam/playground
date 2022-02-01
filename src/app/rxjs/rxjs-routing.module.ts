import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CombinationOperatorsComponent } from './combination-operators/combination-operators.component';
import { MulticastComponent } from './multicast/multicast.component';
import { RxjsComponent } from './rxjs.component';
import { SwitchMapMergeMapConcatMapExhaustMapComponent } from './switch-map-merge-map-concat-map-exhaust-map/switch-map-merge-map-concat-map-exhaust-map.component';

const routes: Routes = [
  { path: '', component: RxjsComponent },
  { path: 'switchMap-mergeMap-concatMap-exhaustMap', component: SwitchMapMergeMapConcatMapExhaustMapComponent },
  { path: 'combination-operators', component: CombinationOperatorsComponent },
  { path: 'multicasting', component: MulticastComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsRoutingModule { }
