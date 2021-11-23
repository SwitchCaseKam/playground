import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DomComponent } from './dom.component';
import { ElementRefComponent } from './element-ref/element-ref.component';
import { Renderer2Component } from './renderer2/renderer2.component';

const routes: Routes = [
  { path: '', component: DomComponent },
  { path: 'renderer2', component: Renderer2Component },
  { path: 'element-ref', component: ElementRefComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DomRoutingModule { }
