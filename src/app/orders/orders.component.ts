import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { OrderState } from './order.model';
import { OrdersService } from './orders.service';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, CommonModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss',
})
export class OrdersComponent implements OnInit {
  searchForm: FormGroup;
  orders: OrderState[] = [];
  searching = false;

  constructor(
    private fb: FormBuilder,
    private ordersService: OrdersService,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this.setupSearchForm();
    this.setEmailBasedOnQueryParam();
  }

  private setEmailBasedOnQueryParam() {
    this.route.queryParams.pipe(take(1)).subscribe((params) => {
      this.searchControl.setValue(params['email']);
    });
  }

  private setupSearchForm() {
    this.searchForm = this.fb.group({ search: [''] });
  }

  get searchControl() {
    return this.searchForm.get('search') as FormControl;
  }

  search() {
    this.searching = true;
    const search = this.searchForm.value.search || '';
    this.makeOrderRequest(search);
  }

  private makeOrderRequest(search: any) {
    this.ordersService
      .getOrders(search)
      .pipe(take(1))
      .subscribe((orders) => {
        this.searching = false;
        this.orders = orders;
      });
  }
}
