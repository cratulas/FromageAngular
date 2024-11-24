import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  news = [
    {
      title: 'Nueva Tienda en París',
      content: '¡Hemos abierto una nueva tienda en el centro de París!',
      img: 'assets/img/store_paris.jpg',
      url: '/news/1',
    },
    {
      title: 'Lanzamiento de Nuevos Quesos',
      content: 'Prueba nuestros nuevos sabores de queso artesanal.',
      img: 'assets/img/new_cheeses.jpg',
      url: '/news/2',
    },
    {
      title: 'Evento de Degustación',
      content: 'Únete a nuestro evento de degustación el próximo sábado.',
      img: 'assets/img/tasting_event.jpg',
      url: '/news/3',
    },
  ];

  offers = [
    { name: 'Queso Camembert', description: 'Descuento del 20%', img: 'assets/img/camembert.jpg' },
    { name: 'Queso Brie', description: 'Compra 1 y lleva otro a mitad de precio', img: 'assets/img/brie.jpg' },
    { name: 'Queso Roquefort', description: '¡Descuento de 15% por hoy!', img: 'assets/img/roquefort.jpg' },
  ];

  reviews = [
    { name: 'Ana', comment: '¡Excelentes quesos y servicio!', rating: 5 },
    { name: 'Carlos', comment: 'Me encantó la variedad francesa.', rating: 4 },
    { name: 'Lucía', comment: 'El queso azul es el mejor.', rating: 5 },
  ];

  specialOffer: any;
  newsletterForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.newsletterForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),
        ],
      ],
    });
  }

  ngOnInit(): void {
    this.selectRandomOffer();
  }

  selectRandomOffer(): void {
    const randomIndex = Math.floor(Math.random() * this.offers.length);
    this.specialOffer = this.offers[randomIndex];
  }

  onSubmit(): void {
    if (this.newsletterForm.valid) {
      const email = this.newsletterForm.value.email;
      alert(`Gracias por suscribirte, ${email}!`);
      this.newsletterForm.reset();
    } else {
      alert('Por favor, ingresa un correo electrónico válido.');
    }
  }
}
