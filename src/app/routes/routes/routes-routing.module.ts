import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from '../guards/login.guard';
import { AComponent } from '../pages/a/a.component';
import { BComponent } from '../pages/b/b.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { LoginComponent } from '../pages/login/login.component';
import { PublicComponent } from '../pages/public/public.component';
import { RoutesComponent } from './routes.component';

const routes: Routes = [
  {
    path: '',
    // redirectTo: 'public',
    component: RoutesComponent,
    pathMatch: 'full'
  },  
  {path: 'a', component: AComponent},
  {path: 'b', component: BComponent},

  { 
    path: 'public',
    component: PublicComponent,
    pathMatch: 'full'
  },
  { 
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginGuard],
    pathMatch: 'full'
  },
  { 
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [LoginGuard],
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
