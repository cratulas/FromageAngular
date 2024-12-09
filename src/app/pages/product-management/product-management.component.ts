import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-management',
  standalone: true,
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.scss'],
  imports: [CommonModule, ReactiveFormsModule],
})
export class ProductManagementComponent implements OnInit {
  products: any[] = [];
  productForm: FormGroup;
  editingProduct: any = null;

  constructor(
    private productService: ProductService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.productForm = this.fb.group({
      id: [null],
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      img: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    // Escuchar eventos de navegación
    this.route.params.subscribe(() => {
      this.fetchProducts();
    });
  }

  // Obtener productos
  fetchProducts(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  // Agregar o actualizar producto
  saveProduct(): void {
    const product = this.productForm.value;
    if (product.id) {
      this.productService.updateProduct(product.id, product).subscribe(() => {
        const index = this.products.findIndex((p) => p.id === product.id);
        if (index !== -1) {
          this.products[index] = product;
        }
        this.resetForm();
      });
    } else {
      product.id = this.products.length + 1;
      this.productService.addProduct(product).subscribe(() => {
        this.products.push(product);
        this.resetForm();
      });
    }
  }

  // Editar producto
  editProduct(product: any): void {
    this.editingProduct = product;
    this.productForm.patchValue(product);
  }

  // Eliminar producto
  deleteProduct(id: number): void {
    this.productService.deleteProduct(id).subscribe(() => {
      this.products = this.products.filter((p) => p.id !== id);
    });
  }

  // Resetear formulario
  resetForm(): void {
    this.productForm.reset();
    this.editingProduct = null;
  }
}
