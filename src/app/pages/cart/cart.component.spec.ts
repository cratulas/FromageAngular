import { TestBed } from '@angular/core/testing';
import { CartComponent } from './cart.component';
import { RouterTestingModule } from '@angular/router/testing'; 
import { HttpClientTestingModule } from '@angular/common/http/testing'; 

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CartComponent, 
        RouterTestingModule, 
        HttpClientTestingModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería calcular el total del carrito correctamente', () => {
    component.cart = [
      { id: 1, name: 'Queso Camembert', price: 10 },
      { id: 2, name: 'Queso Brie', price: 20 },
    ];
    expect(component.getTotal()).toBe(30);
  });

  it('debería eliminar un producto del carrito', () => {
    component.cart = [
      { id: 1, name: 'Queso Camembert', price: 10 },
      { id: 2, name: 'Queso Brie', price: 20 },
    ];
    component.removeFromCart(0);
    expect(component.cart.length).toBe(1);
    expect(component.cart[0].name).toBe('Queso Brie');
  });
});
