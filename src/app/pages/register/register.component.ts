import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  imports: [CommonModule, ReactiveFormsModule],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';
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
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>]).*$'),
        ],
      ],
    });
  }

  onSubmit(): void {
    if (this.registerForm.invalid) {
      this.errorMessage = 'Por favor, completa todos los campos correctamente.';
      return;
    }

    const { name, email, password } = this.registerForm.value;

    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const allUsers = [...this.defaultUsers, ...storedUsers];

    const userExists = allUsers.some((user) => user.email === email);

    if (userExists) {
      this.errorMessage = 'Este correo electrónico ya está registrado. Intenta con otro.';
      return;
    }

    // Asignar rol automáticamente 
    const role = email === 'admin@example.com' ? 'admin' : 'usuario';

    const newUser = { name, email, password, role };
    storedUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(storedUsers));

    this.successMessage = 'Registro exitoso. Ahora puedes iniciar sesión.';
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 2000);
  }
}
