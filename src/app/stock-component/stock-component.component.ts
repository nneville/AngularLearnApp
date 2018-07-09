import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-component',
  templateUrl: './stock-component.component.html',
  styleUrls: ['./stock-component.component.css']
})
export class StockComponentComponent implements OnInit {

  test : string = 'hello!!';
  products : any = [{
    barcode: 1234,
    productName: 'cereales',
    quantity: 300,
    expirationDate: '12/12/2012'
  },
  {
    barcode: 1234,
    productName: 'cereales1',
    quantity: 300,
    expirationDate: '13/12/2012'
  },
  {
    barcode: 1234,
    productName: 'cereales2',
    quantity: 300,
    expirationDate: '02/12/2012'
  },
  {
    barcode: 123,
    productName: 'cereales3',
    quantity: 100,
    expirationDate: '12/12/2012'
  }];

  constructor() { }

  ngOnInit() {
  }

}
