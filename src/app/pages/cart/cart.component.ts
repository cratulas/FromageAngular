import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cart: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart(): void {
    const storedCart = localStorage.getItem('cart');
    this.cart = storedCart ? JSON.parse(storedCart) : [];
  }

  getTotal(): number {
    return this.cart.reduce((total, product) => total + product.price, 0);
  }

  removeFromCart(index: number): void {
    this.cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(this.cart));
    alert('Producto eliminado del carrito.');
  }

  checkout(): void {
    if (this.cart.length === 0) {
      alert('El carrito está vacío. Agrega productos antes de proceder.');
      return;
    }

    const userEmail = localStorage.getItem('userEmail');
    const orderId = new Date().getTime(); // ID único basado en la hora actual
    const newOrder = {
      id: orderId,
      user: userEmail,
      products: this.cart,
      total: this.getTotal(),
      status: 'Pendiente',
    };

    let orders = JSON.parse(localStorage.getItem('orders') || '[]');
    orders.push(newOrder);
    localStorage.setItem('orders', JSON.stringify(orders));

    // Vaciar el carrito
    localStorage.removeItem('cart');
    this.cart = [];
    alert('¡Gracias por tu compra! La orden ha sido registrada.');
  }
}
