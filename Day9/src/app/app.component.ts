import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'Day 9 by Thant Zin Oo';
  products: Product[] = [];
  productService;
  constructor() {
    this.productService = new ProductService();
  }
  getProducts() {
    this.products = this.productService.getProducts();
  }
  ngOnInit(): void {
  }


}
