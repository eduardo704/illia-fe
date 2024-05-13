import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginModalComponent } from './login-modal.component';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from '../login/login.component';
import { MatDialogModule } from '@angular/material/dialog';

describe('LoginModalComponent', () => {
  let component: LoginModalComponent;
  let fixture: ComponentFixture<LoginModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        LoginModalComponent,
        MatDialogModule,
        LoginComponent,
        MatTabsModule,
        BrowserAnimationsModule
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
