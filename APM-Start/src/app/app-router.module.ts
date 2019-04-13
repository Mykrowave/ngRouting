import { NgModule } from '@angular/core';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { RouterModule, Route } from '@angular/router';
import { AuthGuard } from './user/auth.guard';
import { SelectiveLoadStrategyService } from './selective-load-strategy.service';

const Routes: Route[] = [
  { path: 'welcome', component: WelcomeComponent },
  { path: '', pathMatch: 'full', redirectTo: 'welcome' },
  {
    path: 'products',
    loadChildren: './products/product.module#ProductModule',
    canActivate: [AuthGuard],
    data: { preload: true }
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(Routes, { preloadingStrategy: SelectiveLoadStrategyService })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }
