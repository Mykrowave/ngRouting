import { NgModule } from '@angular/core';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { RouterModule, Route, Router } from '@angular/router';
import { AuthGuard } from './user/auth.guard';

const Routes: Route[] = [
  { path: 'welcome', component: WelcomeComponent },
  { path: '', pathMatch: 'full', redirectTo: 'welcome' },
  { path: 'products', loadChildren: './products/product.module#ProductModule', canActivate: [AuthGuard] },
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
