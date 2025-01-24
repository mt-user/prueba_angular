import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/products.interface';

@Component({
  selector: 'table-products',
  standalone: false,

  templateUrl: './table-products.component.html',
  styleUrl: './table-products.component.css'
})

export class TableProductsComponent implements OnInit {
  public products?:Product[];

  constructor(){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.products = [
      { name:"lapiz", price: 15, actions: "escribir"},
      { name:"Boligrafo", price: 25, actions: "escribir"},
      { name:"Goma de borrar", price: 10, actions: "borrar"},
      { name:"sacapuntas", price: 45, actions: "afilar lapiz"},
    ]
  }

}
