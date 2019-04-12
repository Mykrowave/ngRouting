import { NgModule } from '@angular/core';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

import { SharedModule } from '../shared/shared.module';
import { RouterModule, Route } from '@angular/router';
import { ProductResolverService } from './product-resolver.service';
import { ProductEditInfoComponent } from './product-edit/product-edit-info.component';
import { ProductEditTagsComponent } from './product-edit/product-edit-tags.component';

const Routes: Route[] = [
  {
    path: 'products',
    children: [
      { path: '', component: ProductListComponent },
      {
        path: ':id',
        component: ProductDetailComponent,
        resolve: { resolvedData: ProductResolverService }
      },
      {
        path: ':id/edit',
        component: ProductEditComponent,
        resolve: { resolvedData: ProductResolverService },
        children: [
          { path: '', pathMatch: 'full', redirectTo: 'info' },
          { path: 'info', component: ProductEditInfoComponent },
          { path: 'tags', component: ProductEditTagsComponent }
        ]
      }
    ]
  }
];
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(Routes)
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductEditInfoComponent,
    ProductEditTagsComponent
  ]
})
export class ProductModule { }
