import { NgModule } from '@angular/core';

import { LoginComponent } from './login.component';

import { SharedModule } from '../shared/shared.module';
import { Route, RouterModule } from '@angular/router';

const Routes: Route[] = [
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(Routes)
  ],
  declarations: [
    LoginComponent
  ]
})
export class UserModule { }
