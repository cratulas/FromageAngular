import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isLoggedIn = false;
  isAdmin = false;
  userRole: string | null = null;
  showPopup = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.loggedInStatus$.subscribe((status) => {
      this.isLoggedIn = status;
    });

    this.authService.userRole$.subscribe((role) => {
      this.userRole = role;
      this.isAdmin = role === 'admin';
    });

    this.authService.popupTrigger$.subscribe(() => {
      this.showPopup = true;
      setTimeout(() => {
        this.showPopup = false;
      }, 5000); // Popup visible por 5 segundos
    });
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  closePopup(): void {
    this.showPopup = false;
  }
}
