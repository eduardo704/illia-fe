import { Component, Input } from '@angular/core';
import { Product } from '../product.model';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RatingComponent } from '../../shared/components/display/rating/rating.component';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [ RatingComponent, CommonModule, MatButtonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input()
  product: Product;

  constructor() {}
}
