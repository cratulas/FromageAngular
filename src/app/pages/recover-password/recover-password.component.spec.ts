import { TestBed } from '@angular/core/testing';
import { RecoverPasswordComponent } from './recover-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('RecoverPasswordComponent', () => {
  let component: RecoverPasswordComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecoverPasswordComponent, ReactiveFormsModule, RouterTestingModule],
    }).compileComponents();

    const fixture = TestBed.createComponent(RecoverPasswordComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
