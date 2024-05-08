import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faUser, faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faCartShopping, faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { NavbarComponent } from './common/components/navbar/navbar.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'illia-fe';

  constructor(library: FaIconLibrary) {
    library.addIcons(faStar, farStar, faStarHalfStroke, faCartShopping, faUser);
  }
}
