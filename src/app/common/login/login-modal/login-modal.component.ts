import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-login-modal',
  standalone: true,
  imports: [MatDialogModule, LoginComponent, MatTabsModule],
  templateUrl: './login-modal.component.html',
  styleUrl: './login-modal.component.scss',
})
export class LoginModalComponent {}
