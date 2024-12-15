import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        LoginComponent, 
        ReactiveFormsModule, 
        RouterTestingModule, 
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear LoginComponent', () => {
    expect(component).toBeTruthy();
  });

  it('debería validar el formulario correctamente', () => {
   
    expect(component.loginForm).toBeDefined();


    component.loginForm.setValue({
      email: 'usuario@example.com',
      password: 'usuario123',
    });


    expect(component.loginForm.valid).toBeTrue();
  });

  it('debería marcar el formulario como inválido si faltan valores', () => {

    expect(component.loginForm).toBeDefined();


    component.loginForm.setValue({
      email: '',
      password: '',
    });

    expect(component.loginForm.invalid).toBeTrue();
  });
});
