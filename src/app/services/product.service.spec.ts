import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService],
    });

    service = TestBed.inject(ProductService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('debería realizar una solicitud GET para obtener productos', () => {
    const mockProducts = [{ id: 1, name: 'Queso Brie', price: 7.99 }];
    service.getProducts().subscribe((products) => {
      expect(products).toEqual(mockProducts);
    });

    const req = httpMock.expectOne('https://mybucketsumativa3.s3.us-east-1.amazonaws.com/productos.json');
    expect(req.request.method).toBe('GET');
    req.flush(mockProducts);
  });
});
