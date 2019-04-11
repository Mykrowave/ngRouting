import { NgModule } from '@angular/core';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

import { SharedModule } from '../shared/shared.module';
import { RouterModule, Route } from '@angular/router';

const Routes: Route[] = [
  { path: 'products', component: ProductListComponent }
];
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(Routes)
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent
  ]
})
export class ProductModule { }
