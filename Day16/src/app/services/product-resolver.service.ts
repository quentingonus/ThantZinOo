import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ProductService } from './product.service';
import { Product } from 'src/app/interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductResolverService {

  constructor(private product: ProductService) { }
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.product.getProducts().pipe(
      catchError(error => {
        return of('No data');
      })
    );
  }
}
