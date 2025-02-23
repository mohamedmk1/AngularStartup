import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import {ProductService} from "../services/product-service.service";
import {Product} from "../models/product.model";


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'description', 'price', 'actions'];
  dataSource!:MatTableDataSource<Product>;

  constructor(private router: Router, private productService: ProductService) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.productService.getProducts());
  }

  viewDetails(productId: number) {
    this.router.navigate(['/product', productId]);
  }
}
