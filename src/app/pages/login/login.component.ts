import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  errorMessage: string = '';

  defaultUsers = [
    { email: 'usuario@example.com', password: 'usuario123', role: 'usuario' },
    { email: 'admin@example.com', password: 'admin123', role: 'admin' },
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

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
  
    // Combina los usuarios predeterminados y almacenados en localStorage
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const allUsers = [...this.defaultUsers, ...storedUsers];
  
    // Busca al usuario con las credenciales ingresadas
    const user = allUsers.find(u => u.email === email && u.password === password);
  
    if (user) {
      // Inicia sesión pasando tanto el role como el email
      this.authService.login(user.role, email);
  
      // Redirige al usuario a la página principal
      this.router.navigate(['/']);
    } else {
      // Muestra un mensaje de error si las credenciales no coinciden
      this.errorMessage = 'Correo electrónico o contraseña incorrectos.';
    }
  }
  
}
