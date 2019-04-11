import { Component, OnInit } from '@angular/core';

import { Product } from './product';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle = 'Product Detail';
  product: Product;
  errorMessage: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const resolvedProduct: Product = this.activatedRoute.snapshot.data['resolvedData'];
    this.onProductRetrieved(resolvedProduct);
    // const routeProductId: number = +this.activatedRoute.snapshot.paramMap.get('id');
    // this.getProduct(routeProductId);
  }

  onProductRetrieved(product: Product): void {
    this.product = product;

    if (this.product) {
      this.pageTitle = `Product Detail: ${this.product.productName}`;
    } else {
      this.pageTitle = 'No product found';
    }
  }
}
