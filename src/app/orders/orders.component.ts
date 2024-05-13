import { OrdersService } from './orders.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Order } from './order.model';
import { take } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, CommonModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss',
})
export class OrdersComponent implements OnInit {
  searchForm: FormGroup;
  orders: Order[] = [];
  searching = false;
  constructor(
    private fb: FormBuilder,
    private ordersService: OrdersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.searchForm = this.fb.group({ search: [''] });

    this.route.queryParams.subscribe((params) => {
      this.searchControl.setValue(params['email']);
    });
  }

  get searchControl(){
    return this.searchForm.get('search') as FormControl;
  }

  search() {
    this.searching = true;
    const search = this.searchForm.value.search || '';
    this.ordersService
      .getOrders(search)
      .pipe(take(1))
      .subscribe((orders) => {
        this.searching = false;
        this.orders = orders.map((order) => {
          const total = order.products.reduce((prev, curr) => {
            prev += curr.quantity * curr.price;
            return prev;
          }, 0);
          return { ...order, total };
        });
      });
  }
}
