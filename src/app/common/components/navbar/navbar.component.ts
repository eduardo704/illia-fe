import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { LoginModalComponent } from '../../login/login-modal/login-modal.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {MatBadgeModule} from '@angular/material/badge';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    FontAwesomeModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule,
    MatBadgeModule

  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(LoginModalComponent, );
    // this.dialog.open(LoginModalComponent, {minWidth: 500, minHeight: 700});
  }
}
