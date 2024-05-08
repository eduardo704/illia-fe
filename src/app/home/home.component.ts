import { take } from 'rxjs';
import { ProductService } from './../products/product.service';
import { Component, OnInit } from '@angular/core';
import { ProductCardComponent } from '../products/product-card/product-card.component';
import { Product } from '../products/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductCardComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  products:Product[]=[];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService
      .getProducts()
      .pipe(take(1))
      .subscribe((products) => {
        this.products=products;
        console.log(products);
      });
  }
}
