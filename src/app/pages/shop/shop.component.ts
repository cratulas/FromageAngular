import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  products = [
    { id: 1, name: 'Queso Bleu', price: 5.99, img: 'assets/img/bleu.jpg' },
    { id: 2, name: 'Queso Comte', price: 6.99, img: 'assets/img/comte.jpg' },
    { id: 3, name: 'Quesos surtidos', price: 8.99, img: 'assets/img/new_cheeses.jpg' },
    { id: 4, name: 'Queso Brie', price: 7.99, img: 'assets/img/brie.jpg' },
    { id: 5, name: 'Queso Camembert', price: 9.99, img: 'assets/img/camembert.jpg' },
    { id: 6, name: 'Queso Roquefort', price: 12.99, img: 'assets/img/roquefort.jpg' },
  ];
  filteredProducts = [...this.products];
  searchQuery: string = '';

  constructor() {}

  ngOnInit(): void {}

  searchProducts(): void {
    const query = this.searchQuery.toLowerCase();
    this.filteredProducts = this.products.filter((product) =>
      product.name.toLowerCase().includes(query)
    );
  }

  addToCart(product: any): void {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (!isLoggedIn) {
      alert('Por favor, inicia sesión para agregar productos al carrito.');
      return;
    }

    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} ha sido agregado al carrito.`);
  }
}
