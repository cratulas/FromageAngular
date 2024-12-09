import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'https://mybucketsumativa3.s3.us-east-1.amazonaws.com/productos.json';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addProduct(product: any): Observable<any> {
    //  POST
    console.log('Simulando POST para producto:', product);
    return new Observable((observer) => {
      observer.next(product);
      observer.complete();
    });
  }

  updateProduct(id: number, product: any): Observable<any> {
    //  PUT 
    console.log('Simulando PUT para producto:', product);
    return new Observable((observer) => {
      observer.next(product);
      observer.complete();
    });
  }

  deleteProduct(id: number): Observable<any> {
    // DELETE 
    console.log('Simulando DELETE para producto con ID:', id);
    return new Observable((observer) => {
      observer.next({ success: true });
      observer.complete();
    });
  }
}
