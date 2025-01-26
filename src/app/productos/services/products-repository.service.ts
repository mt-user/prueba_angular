import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Product } from '../interfaces/products.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsRepositoryService {

  private idControl: number = 11;
  private ProductsDB: Product[] = [
    {
      id: 1,
      name: 'Laptop Dell XPS 15',
      price: 1599.99
    },
    {
      id: 2,
      name: 'Monitor LG UltraWide 34"',
      price: 449.50
    },
    {
      id: 3,
      name: 'Teclado Mecánico Razer BlackWidow',
      price: 129.99
    },
    {
      id: 4,
      name: 'Mouse Inalámbrico Logitech MX Master 3',
      price: 99.90
    },
    {
      id: 5,
      name: 'SSD Samsung 970 EVO Plus 1TB',
      price: 139.99
    },
    {
      id: 6,
      name: 'Tarjeta Gráfica NVIDIA GeForce RTX 3080',
      price: 699.00
    },
    {
      id: 7,
      name: 'iPad Pro 12.9" 256GB',
      price: 1099.00
    },
    {
      id: 8,
      name: 'Webcam Logitech C920 HD Pro',
      price: 79.99
    },
    {
      id: 9,
      name: 'Router WiFi 6 ASUS RT-AX3000',
      price: 179.50
    },
    {
      id: 10,
      name: 'Disco Duro Externo WD My Passport 2TB',
      price: 69.99
    }
  ];

  constructor() {}

  getProducts(): Observable<Product[]>{
    return of(this.ProductsDB).pipe(delay(1000));
  }

  filterProducts(minPrice: number): Observable<Product[]> {
    console.log('Filtrando productos por precio:', minPrice);
    const filteredProducts = this.ProductsDB.filter(product => product.price >= minPrice);
    return of(filteredProducts);
  }

  addProduct(product: Omit<Product, 'id'>): Observable<Product[]> {
    const newProduct = {
      id: this.idControl,
      ...product
    };

    this.idControl++;
    this.ProductsDB.push(newProduct);
    return of(this.ProductsDB);
  }

  deleteProduct(productId: number): Observable<Product[]> {
    this.ProductsDB =  this.ProductsDB.filter(p => p.id !== productId);
    return of(this.ProductsDB);
  }

  updateProduct(product: Product): Observable<Product[]> {
    const index = this.ProductsDB.findIndex(p => p.id === product.id);
    if (index !== -1) {
      this.ProductsDB[index] = product;
    }
    return of(this.ProductsDB);
  }

}
