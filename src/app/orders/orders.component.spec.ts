import {
  ComponentFixture,
  TestBed,
  async,
  fakeAsync,
  tick,
} from '@angular/core/testing';

import { OrdersComponent } from './orders.component';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { OrdersService } from './orders.service';
import { of } from 'rxjs';

describe('OrdersComponent', () => {
  let component: OrdersComponent;
  let fixture: ComponentFixture<OrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        OrdersComponent,
        ReactiveFormsModule,
        MatFormFieldModule,
        CommonModule,
        // RouterModule.forRoot([]),
      ],
      providers: [
        {
          provide: OrdersService,
          useValue: { getOrders: () => {} },
        },
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: of({
              email: 'edu@gmail.com',
            }),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(OrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('ngOnInit should set input email with query param', () => {
    const searchComp = component.searchForm.value.search || '';
    expect(searchComp).toEqual('edu@gmail.com');
  });
});
