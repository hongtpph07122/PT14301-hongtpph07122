import { Component, OnInit } from '@angular/core';
import { data } from '../MockProduct';
import { Product } from '../Product';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  products = data;
  selected: Product;
  removeItem(id){
    this.products = this.products.filter(product => product.id != id)
  }
  copyItem(product1){
    this.selected = product1;
    console.log(this.selected.name)
  }
}