import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'rxjs', loadChildren: () => import('./rxjs/rxjs.module').then(m => m.RxjsModule) },
  { path: 'change-detection', loadChildren: () => import('./change-detection/change-detection.module').then(m => m.ChangeDetectionModule) },
  { path: 'dom', loadChildren: () => import('./dom/dom.module').then(m => m.DomModule) },
  { path: 'forms', loadChildren: () => import('./forms-example/forms-example.module').then(m => m.FormsExampleModule) },
  { path: 'design-patterns', loadChildren: () => import('./design-patterns/design-patterns.module').then(m => m.DesignPatternsModule) },
  { path: 'typescript-learn', loadChildren: () => import('./typescript-learn/typescript-learn.module').then(m => m.TypescriptLearnModule) },
  { path: '*', component: AppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
