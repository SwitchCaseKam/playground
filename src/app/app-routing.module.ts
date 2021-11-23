import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'rxjs', loadChildren: () => import('./rxjs/rxjs.module').then(m => m.RxjsModule) },
  { path: 'change-detection', loadChildren: () => import('./change-detection/change-detection.module').then(m => m.ChangeDetectionModule) },
  { path: 'dom', loadChildren: () => import('./dom/dom.module').then(m => m.DomModule) },
  { path: '*', component: AppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
