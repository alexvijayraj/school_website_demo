import { LandingLayoutComponent } from './shared/components/layouts/landing-layout/landing-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingV5Component } from 'src/app/views/landing/landing-v5/landing-v5.component';

import { AuthLayoutComponent } from './shared/components/layouts/auth-layout/auth-layout.component';

const routes: Routes = [
  {
    path: '', component: LandingV5Component,
    pathMatch: 'full'
  },
  {
    path: '**', redirectTo: ''
  },
  // {
  //   path: '',
  //   component: AuthLayoutComponent,
  //   children: [
  //     {
  //       path: 'sessions',
  //       loadChildren: './views/sessions/sessions.module#SessionsModule'
  //     }
  //   ]
  // },
  // {
  //   path: '',
  //   component: LandingLayoutComponent,
  //   children: [
  //     {
  //       path: 'landing',
  //       loadChildren: './views/landing/landing.module#LandingModule'
  //     }
  //   ]
  // },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
