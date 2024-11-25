import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn: boolean = false;
  userRole: string | null = null;

  constructor() {
    this.checkInitialLoginState();
  }

  // Verifica si localStorage está disponible
  isLocalStorageAvailable(): boolean {
    return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
  }

  checkInitialLoginState(): void {
    if (this.isLocalStorageAvailable()) {
      this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
      this.userRole = localStorage.getItem('userRole');
    }
  }

  login(role: string): void {
    if (this.isLocalStorageAvailable()) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userRole', role);
    }
    this.isLoggedIn = true;
    this.userRole = role;
  }

  logout(): void {
    if (this.isLocalStorageAvailable()) {
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('userRole');
      localStorage.removeItem('userEmail');
    }
    this.isLoggedIn = false;
    this.userRole = null;
  }
}
