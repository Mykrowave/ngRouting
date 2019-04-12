import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { MessageComponent } from './message.component';
import { RouterModule, Route } from '@angular/router';

const ROUTES: Route[] = [
  { path: 'messages', component: MessageComponent, outlet: 'popup' }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    MessageComponent
  ]
})
export class MessageModule { }
