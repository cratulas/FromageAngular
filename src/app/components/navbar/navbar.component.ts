import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [CommonModule, RouterModule],
})
export class NavbarComponent implements OnInit {
  isLoggedIn = false;
  userRole: string | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.loggedInStatus$.subscribe((status: boolean) => {
      this.isLoggedIn = status;
    });

    this.authService.userRole$.subscribe((role: string | null) => {
      this.userRole = role;
    });
  }

  logout(): void {
    this.authService.logout();
    window.location.reload();
  }
}
