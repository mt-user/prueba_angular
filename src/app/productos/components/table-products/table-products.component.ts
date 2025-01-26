import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/products.interface';
import { ProductsService } from '../../services/products.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'table-products',
  standalone: false,

  templateUrl: './table-products.component.html',
  styleUrl: './table-products.component.css'
})

export class TableProductsComponent implements OnInit {
  products: Observable<Product[]>;
  selectedProduct: Product | null = null;
  isModalOpen:boolean = false;


  constructor(private productService: ProductsService){
    this.products = this.productService.products$;
  }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts()
  }

  editProduct(product: Product) {
    this.selectedProduct = product;
    this.isModalOpen = true;
  }

  onSaveProduct(updatedProduct: Product) {
    this.productService.updateProduct(updatedProduct);
    this.closeModal();
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedProduct = null;
  }

  deleteProduct(product: Product) {
    if (confirm('¿Está seguro que desea eliminar este producto?')) {
      this.productService.deleteProduct(product.id);
    }
  }
}
