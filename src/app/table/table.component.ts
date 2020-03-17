import { Component, OnInit } from '@angular/core';
import { data } from '../MockProduct';
import { Product } from '../Product';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  products = data;
  selected : Product;
  removeProduct(id){
    this.products = this.products.filter(product => product.id != id)
  }

}