import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedInStatus = new BehaviorSubject<boolean>(false);
  private userRole = new BehaviorSubject<string | null>(null);
  public popupTrigger$ = new Subject<void>();

  loggedInStatus$ = this.loggedInStatus.asObservable();
  userRole$ = this.userRole.asObservable();

  constructor() {
    if (this.isBrowser()) {
      const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
      const role = localStorage.getItem('userRole');
      this.loggedInStatus.next(isLoggedIn);
      this.userRole.next(role);
    }
  }

  login(role: string): void {
    if (this.isBrowser()) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userRole', role);
    }
    this.loggedInStatus.next(true);
    this.userRole.next(role);
    this.popupTrigger$.next(); // Disparar el popup
  }

  logout(): void {
    if (this.isBrowser()) {
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('userRole');
      localStorage.removeItem('userEmail');
    }
    this.loggedInStatus.next(false);
    this.userRole.next(null);
  }

  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }
}
