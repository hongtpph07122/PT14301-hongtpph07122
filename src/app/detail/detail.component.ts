import { Component, OnInit,Input } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  product : Product;
  constructor(
    private productService : ProductService,
    private route :ActivatedRoute
  ) { }
  
  ngOnInit() {
    
    this.route.params.subscribe(param => {
    this.product = this.productService.getProduct(param.id);
    })
  }

}