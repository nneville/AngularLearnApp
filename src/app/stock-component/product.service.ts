import { Injectable } from "@angular/core";
import { IProduct } from "./product";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

  private productUrl = 'http://localhost:8090/api/v1/product';

  constructor (private http : HttpClient) {}

    getProducts() : IProduct[] {
        return [{
            barcode: '1234',
            productName: 'cereales',
            quantity: 300,
            expirationDate: '12/12/2012',
            rate: 3
          },
          {
            barcode: '1234',
            productName: 'cereales1',
            quantity: 300,
            expirationDate: '13/12/2012',
            rate: 1.5
          },
          {
            barcode: '1234',
            productName: 'cereales2',
            quantity: 300,
            expirationDate: '02/12/2012',
            rate: 5
          },
          {
            barcode: '123',
            productName: 'cereales3',
            quantity: 100,
            expirationDate: '12/12/2012',
            rate: 3.5
          }];
    }

    getProduct() : Observable<IProduct> {
      return this.http.get<IProduct>(this.productUrl).pipe(
        tap(data => data),
        catchError(this.handleError)
      );
    }

    private handleError(err: HttpErrorResponse) {
      let errorMessage: string = `an error occure ${err.error.message}`;
      return throwError(errorMessage);
    }

}