import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../interfaces/products.interface';
import { ProductsRepositoryService } from './products-repository.service';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  private productsSubject = new BehaviorSubject<Product[]>([]);
  public products$ = this.productsSubject.asObservable();

  constructor(private productsRepository: ProductsRepositoryService) {
    this.getProducts();
  }

  getProducts(): void {
    this.productsRepository.getProducts().subscribe(
      (value) => this.productsSubject.next(value)
    );
  }

  filterProducts(minPrice: number): void {
    this.productsRepository.filterProducts(minPrice).subscribe(
      (value) => this.productsSubject.next(value)
    );
  }

  addProduct(product: Omit<Product, 'id'>) {
    this.productsRepository.addProduct(product).subscribe(
      (value) => this.productsSubject.next(value)
    );
  }

  deleteProduct(productId: number) {
    this.productsRepository.deleteProduct(productId).subscribe(
      (value) => this.productsSubject.next(value)
    );
  }

  updateProduct(product: Product) {
    this.productsRepository.updateProduct(product).subscribe(
      (value) => this.productsSubject.next(value)
    );
  }

}
