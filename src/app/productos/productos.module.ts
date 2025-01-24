import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPruductsComponent } from './components/search-pruducts/search-pruducts.component';
import { TableProductsComponent } from './components/table-products/table-products.component';



@NgModule({
  declarations: [
    SearchPruductsComponent,
    TableProductsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SearchPruductsComponent,
    TableProductsComponent
  ]
})
export class ProductosModule { }
