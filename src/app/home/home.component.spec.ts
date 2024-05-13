import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { ProductCardComponent } from '../products/product-card/product-card.component';
import { CartState } from '../state/cart/cart.state';
import { ProductsState } from '../state/products/product.state';
import { HomeComponent } from './home.component';
import { ProductActions } from '../state/products/product.actions';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let store: Store;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HomeComponent,
        ProductCardComponent,
        CommonModule,
        NgxsModule.forRoot([ProductsState, CartState]),
        HttpClientTestingModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.inject(Store);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should dispatch Fetch Products on init', () => {
    const spy = jest.spyOn(store, 'dispatch');
    component.ngOnInit();
    expect(spy).toHaveBeenCalledWith(new ProductActions.FetchAll());
  });
});
