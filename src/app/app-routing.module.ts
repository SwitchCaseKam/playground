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
  { path: 'css', loadChildren: () => import('./css/css.module').then(m => m.CssModule) },
  { path: 'directives', loadChildren: () => import('./directives/directives.module').then(m => m.DirectivesModule) },
  { path: 'pipes', loadChildren: () => import('./pipes/pipes.module').then(m => m.PipesModule) },
  { path: 'flexbox', loadChildren: () => import('./flexbox/flexbox.module').then(m => m.FlexboxModule) },
  { path: 'grid', loadChildren: () => import('./grid/grid.module').then(m => m.GridModule) },
  { path: 'input-output', loadChildren: () => import('./input-output/input-output.module').then(m => m.InputOutputModule) },
  { path: '*', component: AppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
