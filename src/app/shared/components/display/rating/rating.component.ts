import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Rating } from '../../../../products/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.scss',
})
export class RatingComponent implements OnChanges {
  @Input() rating: Rating;

  fullStars: any[] = [];
  halfStars: any = [];
  emptyStars: any = [];

  ngOnChanges(changes: SimpleChanges): void {
    this.updateRatings(changes['rating'].currentValue);
  }
  updateRatings({ rate }: Rating) {
    const integerPart = Math.trunc(rate);
    const fraction = parseFloat((rate - integerPart).toFixed(2));

    this.fullStars = new Array(integerPart);

    if (fraction >= 0.3 && fraction <= 0.7) {
      this.halfStars = new Array(1);
    }
    if (fraction > 0.7) {
      this.fullStars.push(undefined);
    }
    const emptyTotal = 5 - (this.fullStars.length + this.halfStars.length);
    this.emptyStars = new Array(emptyTotal);
  }
}
