import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../services/product-service.service";
import {Product} from "../models/product.model";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  productId!: number;
  currentProduct: Product | undefined;

  constructor(private router: ActivatedRoute, private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productId = this.router.snapshot.params['id'];

    this.currentProduct = this.productService.getProductById(this.productId);
    console.log(this.currentProduct);
  }
}
