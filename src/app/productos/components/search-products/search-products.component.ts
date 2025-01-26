import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'search-products',
  standalone: false,

  templateUrl: './search-products.component.html',
  styleUrl: './search-products.component.css'
})

export class SearchProductsComponent implements OnInit {
  searchPrice = new FormControl('');

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.searchPrice.valueChanges
    .pipe(
      debounceTime(300),
      distinctUntilChanged()
    )
    .subscribe((value) => {
      this.searchProducts(Number(value) || 0);
    });
  }

  searchProducts(minPrice: number): void {
    this.productService.filterProducts(minPrice);
  }
}
