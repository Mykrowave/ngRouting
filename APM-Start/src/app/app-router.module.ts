import { NgModule } from '@angular/core';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { RouterModule, Route, Router } from '@angular/router';

const Routes: Route[] = [
  { path: 'welcome', component: WelcomeComponent },
  { path: '', pathMatch: 'full', redirectTo: 'welcome' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(Routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }
