import { TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { AuthService } from '../../services/auth.service';
import { of } from 'rxjs';

describe('HomeComponent', () => {
  let authServiceMock: any;

  beforeEach(async () => {
    authServiceMock = {
      getEmail: () => 'usuario@example.com',
    };

    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [{ provide: AuthService, useValue: authServiceMock }],
    }).compileComponents();
  });

  it('debería mostrar el mensaje de bienvenida con el correo electrónico', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#welcomeMessage')?.textContent).toContain(
      '¡Bienvenido! usuario@example.com'
    );
  });
});
