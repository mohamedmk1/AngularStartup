import { Injectable } from '@angular/core';
import {Product} from "../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products!: Product[];
  constructor() { }

  getProducts(): Product[] {
    this.products = [
      { id: 1, name: 'Product A', description: 'Description for Product A', price: 100 },
      { id: 2, name: 'Product B', description: 'Description for Product B', price: 150 },
      { id: 3, name: 'Product C', description: 'Description for Product C', price: 200 }
    ];

    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id == id);
  }
}
