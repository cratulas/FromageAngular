import { TestBed } from '@angular/core/testing';
import { ProductManagementComponent } from './product-management.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProductManagementComponent', () => {
  let component: ProductManagementComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ProductManagementComponent,
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
    }).compileComponents();

    const fixture = TestBed.createComponent(ProductManagementComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
