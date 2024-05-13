import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { CartState } from '../../../state/cart/cart.state';
import { ProductsState } from '../../../state/products/product.state';
import { NgxsModule } from '@ngxs/store';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NavbarComponent,
        FontAwesomeModule,
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        MatBadgeModule,
        CommonModule,
        RouterModule.forRoot([]),
        FontAwesomeTestingModule,
        NgxsModule.forRoot([ProductsState, CartState]),
        HttpClientTestingModule
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
