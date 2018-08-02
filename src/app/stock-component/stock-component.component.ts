import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-stock-component',
  templateUrl: './stock-component.component.html',
  styleUrls: ['./stock-component.component.css']
})

export class StockComponentComponent implements OnInit {

  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  filteredProducts: IProduct[];
  test: string = '';
  products: IProduct[] = [];

  constructor(private productService: ProductService) { 
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;

    this.productService.getProduct().subscribe(
      httpTestData => {
      /*let  product : IProduct = /*{
          barcode: httpTestData.product.code,
          productName: 'httpTestData.product.product_name',
          quantity: 5,
          expirationDate: '15/08/2018',
          rate: 5
        }*/
        this.products.push(httpTestData);
      },
      error => console.log(error)
    )
  }

  onRatingClicked(message: string): void {
    this.test = '___ Value is "' + message + '" ___';
  }

}
