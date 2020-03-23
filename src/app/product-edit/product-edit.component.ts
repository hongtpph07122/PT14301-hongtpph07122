import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  constructor(
    private productService : ProductService,
    private activatedRoute : ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit() {
    this.getProduct();
  }
  getProduct(){
    this.activatedRoute.params.subscribe(param => {
      this.product = this.productService.getProduct(param.id);
    })
  }
  submitForm(){
    this.productService.updateProduct(this.product);
    this.router.navigate(['/product-list']);
  }
}