import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { CartState } from '../../../state/cart/cart.state';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    FontAwesomeModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule,
    MatBadgeModule,
    CommonModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @Select(CartState.getTotalCartQuantity)
  totalQuantityOfItems$: Observable<number>;
  constructor() {}


}
