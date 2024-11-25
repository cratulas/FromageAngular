import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [CommonModule, ReactiveFormsModule],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  errorMessage: string = '';

  // Usuarios predefinidos
  defaultUsers = [
    { email: 'usuario@example.com', password: 'usuario123', role: 'usuario' },
    { email: 'admin@example.com', password: 'admin123', role: 'admin' },
  ];

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.errorMessage = 'Por favor, completa todos los campos correctamente.';
      return;
    }

    const { email, password } = this.loginForm.value;

    // Combina usuarios predefinidos y almacenados en localStorage
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const allUsers = [...this.defaultUsers, ...storedUsers];

    const user = allUsers.find(u => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userRole', user.role);
      localStorage.setItem('userEmail', user.email);

      alert(`¡Bienvenido! Has iniciado sesión como ${user.role}.`);
      this.router.navigate(['/']); // Navega al inicio
    } else {
      this.errorMessage = 'Correo electrónico o contraseña incorrectos.';
    }
  }
}
