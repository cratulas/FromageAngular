import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterComponent } from './register.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [RegisterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el formulario de registro correctamente', () => {
    expect(component.registerForm).toBeTruthy();
    expect(component.registerForm.valid).toBeFalsy();
  });

  it('debería mostrar error si las contraseñas no coinciden', () => {
    component.registerForm.setValue({
      name: 'Test User',
      email: 'test@example.com',
      password: 'Password1!',
      confirmPassword: 'Mismatch',
    });
    component.onSubmit();
    expect(component.errorMessage).toBe('Las contraseñas no coinciden.');
  });
});
