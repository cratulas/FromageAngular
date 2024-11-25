import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-recover-password',
  standalone: true,
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss'],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
})
export class RecoverPasswordComponent implements OnInit {
  recoverForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.recoverForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit(): void {
    if (this.recoverForm.invalid) {
      return;
    }

    const { email } = this.recoverForm.value;
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((user: any) => user.email === email);

    if (user) {
      alert(`Se han enviado las instrucciones de recuperación al correo: ${email}`);
      this.router.navigate(['/login']);
    } else {
      alert('No se encontró un usuario con este correo electrónico.');
    }
  }
}
