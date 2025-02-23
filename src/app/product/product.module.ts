import {NgModule} from '@angular/core';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductRoutingModule} from "./product-routing-module";
import {ProductDetailsComponent} from './product-details/product-details.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent
  ],
  imports: [
    ProductRoutingModule,
    SharedModule,
  ]
})
export class ProductModule {
}
