import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  imports: [CommonModule, ReactiveFormsModule],
})
export class ProfileComponent implements OnInit {
  profileForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    const userEmail = localStorage.getItem('userEmail');
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const currentUser = users.find((user: any) => user.email === userEmail);

    if (currentUser) {
      this.profileForm = this.fb.group({
        name: [currentUser.name, [Validators.required]],
        email: [{ value: currentUser.email, disabled: true }, [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8), this.validatePassword]],
        confirmPassword: ['', [Validators.required]],
      });
    } else {
      alert('No se encontró el usuario.');
      this.router.navigate(['/']);
    }
  }

  validatePassword(control: any): { [key: string]: boolean } | null {
    const value = control.value;
    const hasUpperCase = /[A-Z]/.test(value);
    const hasNumber = /[0-9]/.test(value);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);

    return hasUpperCase && hasNumber && hasSpecialChar ? null : { invalidPassword: true };
  }

  onSubmit(): void {
    if (this.profileForm.invalid) {
      return;
    }

    const { name, password, confirmPassword } = this.profileForm.value;

    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden.');
      return;
    }

    const userEmail = localStorage.getItem('userEmail');
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const currentUser = users.find((user: any) => user.email === userEmail);

    if (currentUser) {
      currentUser.name = name;
      currentUser.password = password;
      localStorage.setItem('users', JSON.stringify(users));
      alert('Los cambios se han guardado correctamente.');
      this.router.navigate(['/']);
    } else {
      alert('No se encontró el usuario.');
    }
  }
}
