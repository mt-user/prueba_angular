import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchProductsComponent } from './components/search-products/search-products.component';
import { TableProductsComponent } from './components/table-products/table-products.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddProductsComponent } from './components/add-products/add-products.component';
import { EditProductsComponent } from './components/edit-products/edit-products.component';


@NgModule({
  declarations: [
    TableProductsComponent,
    SearchProductsComponent,
    AddProductsComponent,
    EditProductsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    TableProductsComponent,
    SearchProductsComponent,
    AddProductsComponent,
    EditProductsComponent
  ]
})
export class ProductosModule { }
