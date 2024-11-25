import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../../services/auth.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, RouterTestingModule],
      declarations: [LoginComponent],
      providers: [AuthService],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
    fixture.detectChanges();
  });

  it('debería crear el formulario con campos válidos', () => {
    expect(component.loginForm).toBeTruthy();
    expect(component.loginForm.get('email')?.valid).toBeFalsy();
    expect(component.loginForm.get('password')?.valid).toBeFalsy();
  });

  it('debería iniciar sesión correctamente', () => {
    spyOn(authService, 'login');
    component.loginForm.setValue({ email: 'usuario@example.com', password: 'usuario123' });
    component.onSubmit();
    expect(authService.login).toHaveBeenCalledWith('usuario@example.com', 'usuario');
  });
});
